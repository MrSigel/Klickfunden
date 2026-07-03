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

function setPartnerEnv() {
  process.env.PARTNER_SESSION_SECRET = "b".repeat(32);
}

async function loadModule() {
  return await import("@/lib/partner-auth");
}

describe("partner-auth", () => {
  describe("PARTNER_COOKIE", () => {
    it("is klickfunden_partner_session", async () => {
      const { PARTNER_COOKIE } = await loadModule();
      expect(PARTNER_COOKIE).toBe("klickfunden_partner_session");
    });
  });

  describe("isPartnerAuthConfigured", () => {
    it("returns true when PARTNER_SESSION_SECRET is set and long enough", async () => {
      setPartnerEnv();
      const { isPartnerAuthConfigured } = await loadModule();
      expect(isPartnerAuthConfigured()).toBe(true);
    });

    it("returns false when PARTNER_SESSION_SECRET is missing", async () => {
      delete process.env.PARTNER_SESSION_SECRET;
      const { isPartnerAuthConfigured } = await loadModule();
      expect(isPartnerAuthConfigured()).toBe(false);
    });

    it("returns false when PARTNER_SESSION_SECRET is too short", async () => {
      process.env.PARTNER_SESSION_SECRET = "short";
      const { isPartnerAuthConfigured } = await loadModule();
      expect(isPartnerAuthConfigured()).toBe(false);
    });
  });

  describe("hashPassword / verifyPassword", () => {
    it("hashes a password and verifies it correctly", async () => {
      setPartnerEnv();
      const { hashPassword, verifyPassword } = await loadModule();
      const hash = await hashPassword("my-secret-password");
      expect(hash).toMatch(/^scrypt\$/);
      expect(await verifyPassword("my-secret-password", hash)).toBe(true);
    });

    it("rejects a wrong password", async () => {
      setPartnerEnv();
      const { hashPassword, verifyPassword } = await loadModule();
      const hash = await hashPassword("correct-password");
      expect(await verifyPassword("wrong-password", hash)).toBe(false);
    });

    it("produces different hashes for the same password (random salt)", async () => {
      setPartnerEnv();
      const { hashPassword } = await loadModule();
      const hash1 = await hashPassword("same-password");
      const hash2 = await hashPassword("same-password");
      expect(hash1).not.toBe(hash2);
    });

    it("rejects a malformed stored hash", async () => {
      setPartnerEnv();
      const { verifyPassword } = await loadModule();
      expect(await verifyPassword("pw", "invalid-hash")).toBe(false);
      expect(await verifyPassword("pw", "wrongalgo$salt$hex")).toBe(false);
    });
  });

  describe("createPartnerSession / verifyPartnerSession", () => {
    const validUUID = "550e8400-e29b-41d4-a716-446655440000";

    it("creates a session that can be verified", async () => {
      setPartnerEnv();
      const { createPartnerSession, verifyPartnerSession } = await loadModule();
      const session = createPartnerSession(validUUID);
      expect(session.value).toBeTruthy();
      expect(session.maxAge).toBeGreaterThan(0);
      expect(verifyPartnerSession(session.value)).toBe(validUUID);
    });

    it("fails verification with a tampered signature", async () => {
      setPartnerEnv();
      const { createPartnerSession, verifyPartnerSession } = await loadModule();
      const session = createPartnerSession(validUUID);
      const tampered = session.value.slice(0, -1) + "X";
      expect(verifyPartnerSession(tampered)).toBeNull();
    });

    it("fails verification with an empty value", async () => {
      setPartnerEnv();
      const { verifyPartnerSession } = await loadModule();
      expect(verifyPartnerSession("")).toBeNull();
      expect(verifyPartnerSession(undefined)).toBeNull();
    });

    it("fails verification with a non-UUID partner id", async () => {
      setPartnerEnv();
      const { verifyPartnerSession } = await loadModule();
      expect(verifyPartnerSession("not-a-uuid.9999999999.sig")).toBeNull();
    });

    it("throws when secret is not configured", async () => {
      delete process.env.PARTNER_SESSION_SECRET;
      const { createPartnerSession } = await loadModule();
      expect(() => createPartnerSession(validUUID)).toThrow();
    });

    it("fails verification without a configured secret", async () => {
      delete process.env.PARTNER_SESSION_SECRET;
      const { verifyPartnerSession } = await loadModule();
      expect(verifyPartnerSession("anything.123.sig")).toBeNull();
    });
  });
});
