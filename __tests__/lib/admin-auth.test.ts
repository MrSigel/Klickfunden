jest.mock("next/headers", () => ({
  cookies: jest.fn(),
}));

const originalEnv = process.env;

beforeEach(() => {
  jest.resetModules();
  process.env = { ...originalEnv };
});

afterAll(() => {
  process.env = originalEnv;
});

function setAuthEnv(overrides: Partial<Record<string, string>> = {}) {
  process.env.ADMIN_SESSION_SECRET = overrides.ADMIN_SESSION_SECRET ?? "a".repeat(32);
  process.env.ADMIN_EMAIL = overrides.ADMIN_EMAIL ?? "admin@example.com";
  process.env.ADMIN_PASSWORD = overrides.ADMIN_PASSWORD ?? "supersecret";
}

async function loadModule() {
  return await import("@/lib/admin-auth");
}

describe("admin-auth", () => {
  describe("SESSION_COOKIE", () => {
    it("uses the default cookie name", async () => {
      delete process.env.ADMIN_SESSION_COOKIE;
      const mod = await loadModule();
      expect(mod.SESSION_COOKIE).toBe("klickfunden_admin_session");
    });

    it("uses a custom cookie name from env", async () => {
      process.env.ADMIN_SESSION_COOKIE = "custom_session";
      const mod = await loadModule();
      expect(mod.SESSION_COOKIE).toBe("custom_session");
    });
  });

  describe("isAdminAuthConfigured", () => {
    it("returns true when all env vars are set", async () => {
      setAuthEnv();
      const { isAdminAuthConfigured } = await loadModule();
      expect(isAdminAuthConfigured()).toBe(true);
    });

    it("returns false when ADMIN_SESSION_SECRET is missing", async () => {
      setAuthEnv();
      delete process.env.ADMIN_SESSION_SECRET;
      const { isAdminAuthConfigured } = await loadModule();
      expect(isAdminAuthConfigured()).toBe(false);
    });

    it("returns false when ADMIN_SESSION_SECRET is too short", async () => {
      setAuthEnv({ ADMIN_SESSION_SECRET: "short" });
      const { isAdminAuthConfigured } = await loadModule();
      expect(isAdminAuthConfigured()).toBe(false);
    });

    it("returns false when ADMIN_EMAIL is missing", async () => {
      setAuthEnv();
      delete process.env.ADMIN_EMAIL;
      const { isAdminAuthConfigured } = await loadModule();
      expect(isAdminAuthConfigured()).toBe(false);
    });

    it("returns false when ADMIN_PASSWORD is missing", async () => {
      setAuthEnv();
      delete process.env.ADMIN_PASSWORD;
      const { isAdminAuthConfigured } = await loadModule();
      expect(isAdminAuthConfigured()).toBe(false);
    });
  });

  describe("createAdminSession / verifyAdminSession", () => {
    it("creates a session that can be verified", async () => {
      setAuthEnv();
      const { createAdminSession, verifyAdminSession } = await loadModule();
      const session = createAdminSession();
      expect(session.value).toBeTruthy();
      expect(session.maxAge).toBeGreaterThan(0);
      expect(verifyAdminSession(session.value)).toBe(true);
    });

    it("fails verification with a tampered signature", async () => {
      setAuthEnv();
      const { createAdminSession, verifyAdminSession } = await loadModule();
      const session = createAdminSession();
      const tampered = session.value.slice(0, -1) + "X";
      expect(verifyAdminSession(tampered)).toBe(false);
    });

    it("fails verification with an empty value", async () => {
      setAuthEnv();
      const { verifyAdminSession } = await loadModule();
      expect(verifyAdminSession("")).toBe(false);
      expect(verifyAdminSession(undefined)).toBe(false);
    });

    it("fails verification without a configured secret", async () => {
      setAuthEnv();
      const { createAdminSession } = await loadModule();
      const session = createAdminSession();

      jest.resetModules();
      delete process.env.ADMIN_SESSION_SECRET;
      const { verifyAdminSession } = await import("@/lib/admin-auth");
      expect(verifyAdminSession(session.value)).toBe(false);
    });

    it("fails verification with a wrong role prefix", async () => {
      setAuthEnv();
      const { verifyAdminSession } = await loadModule();
      expect(verifyAdminSession("user.9999999999.abc")).toBe(false);
    });

    it("fails verification with an expired token", async () => {
      setAuthEnv();
      const { verifyAdminSession } = await loadModule();
      const expired = Math.floor(Date.now() / 1000) - 1;
      expect(verifyAdminSession(`admin.${expired}.fakesig`)).toBe(false);
    });
  });

  describe("validCredentials", () => {
    it("returns true for correct email and password", async () => {
      setAuthEnv();
      const { validCredentials } = await loadModule();
      expect(validCredentials("admin@example.com", "supersecret")).toBe(true);
    });

    it("is case-insensitive for email", async () => {
      setAuthEnv();
      const { validCredentials } = await loadModule();
      expect(validCredentials("ADMIN@Example.COM", "supersecret")).toBe(true);
    });

    it("trims whitespace from email", async () => {
      setAuthEnv();
      const { validCredentials } = await loadModule();
      expect(validCredentials("  admin@example.com  ", "supersecret")).toBe(true);
    });

    it("returns false for wrong email", async () => {
      setAuthEnv();
      const { validCredentials } = await loadModule();
      expect(validCredentials("wrong@example.com", "supersecret")).toBe(false);
    });

    it("returns false for wrong password", async () => {
      setAuthEnv();
      const { validCredentials } = await loadModule();
      expect(validCredentials("admin@example.com", "wrongpassword")).toBe(false);
    });

    it("returns false when env vars are missing", async () => {
      delete process.env.ADMIN_EMAIL;
      delete process.env.ADMIN_PASSWORD;
      delete process.env.ADMIN_SESSION_SECRET;
      const { validCredentials } = await loadModule();
      expect(validCredentials("admin@example.com", "supersecret")).toBe(false);
    });
  });
});
