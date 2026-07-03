import { NextRequest } from "next/server";

const originalEnv = process.env;

beforeEach(() => {
  jest.resetModules();
  process.env = { ...originalEnv, ADMIN_SESSION_COOKIE: "klickfunden_admin_session" };
});

afterAll(() => {
  process.env = originalEnv;
});

function createRequest(pathname: string, cookies: Record<string, string> = {}): NextRequest {
  const url = new URL(pathname, "http://localhost:3000");
  const req = new NextRequest(url);
  for (const [name, value] of Object.entries(cookies)) {
    req.cookies.set(name, value);
  }
  return req;
}

describe("middleware", () => {
  it("redirects unauthenticated admin requests to /login", async () => {
    const { middleware } = await import("@/middleware");
    const req = createRequest("/admin/dashboard");
    const response = middleware(req);
    expect(response.status).toBe(307);
    const location = response.headers.get("location");
    expect(location).toContain("/login");
    expect(location).toContain("redirect=%2Fadmin%2Fdashboard");
  });

  it("allows authenticated admin requests to proceed", async () => {
    const { middleware } = await import("@/middleware");
    const req = createRequest("/admin/dashboard", { klickfunden_admin_session: "valid-session" });
    const response = middleware(req);
    expect(response.status).toBe(200);
  });

  it("redirects unauthenticated partner dashboard requests to /partner/login", async () => {
    const { middleware } = await import("@/middleware");
    const req = createRequest("/partner/dashboard");
    const response = middleware(req);
    expect(response.status).toBe(307);
    const location = response.headers.get("location");
    expect(location).toContain("/partner/login");
  });

  it("allows authenticated partner dashboard requests to proceed", async () => {
    const { middleware } = await import("@/middleware");
    const req = createRequest("/partner/dashboard", { klickfunden_partner_session: "valid-session" });
    const response = middleware(req);
    expect(response.status).toBe(200);
  });

  it("does not redirect non-admin, non-partner-dashboard routes", async () => {
    const { middleware } = await import("@/middleware");
    const req = createRequest("/");
    const response = middleware(req);
    expect(response.status).toBe(200);
  });

  it("exports correct matcher config", async () => {
    const { config } = await import("@/middleware");
    expect(config.matcher).toEqual(["/admin/:path*", "/partner/dashboard/:path*"]);
  });
});
