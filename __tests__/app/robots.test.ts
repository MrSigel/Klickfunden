import robots from "@/app/robots";

describe("robots", () => {
  const result = robots();

  it("allows all user agents", () => {
    const rules = Array.isArray(result.rules) ? result.rules : [result.rules];
    const allRule = rules.find((r) => r.userAgent === "*");
    expect(allRule).toBeDefined();
    expect(allRule!.allow).toBe("/");
  });

  it("disallows admin, dashboard, login and API paths", () => {
    const rules = Array.isArray(result.rules) ? result.rules : [result.rules];
    const allRule = rules.find((r) => r.userAgent === "*");
    const disallowed = Array.isArray(allRule!.disallow) ? allRule!.disallow : [allRule!.disallow];
    expect(disallowed).toContain("/admin/");
    expect(disallowed).toContain("/dashboard/");
    expect(disallowed).toContain("/login");
    expect(disallowed).toContain("/api/");
    expect(disallowed).toContain("/partner/dashboard");
    expect(disallowed).toContain("/partner/login");
    expect(disallowed).toContain("/partner/registrieren");
  });

  it("points to the correct sitemap URL", () => {
    expect(result.sitemap).toBe("https://www.klickfunden.de/sitemap.xml");
  });

  it("sets the correct host", () => {
    expect(result.host).toBe("https://www.klickfunden.de");
  });
});
