import { navLinks, services, faqItems } from "@/lib/data";

describe("data", () => {
  describe("navLinks", () => {
    it("is a non-empty array", () => {
      expect(navLinks.length).toBeGreaterThan(0);
    });

    it("each link has a label and href", () => {
      for (const link of navLinks) {
        expect(link.label).toBeTruthy();
        expect(link.href).toBeTruthy();
      }
    });

    it("hrefs start with / or #", () => {
      for (const link of navLinks) {
        expect(link.href).toMatch(/^[/#]/);
      }
    });

    it("contains expected navigation items", () => {
      const labels = navLinks.map((l) => l.label);
      expect(labels).toContain("Leistungen");
      expect(labels).toContain("FAQ");
    });
  });

  describe("services", () => {
    it("is a non-empty array", () => {
      expect(services.length).toBeGreaterThan(0);
    });

    it("each service has required properties", () => {
      for (const service of services) {
        expect(service.id).toBeTruthy();
        expect(service.href).toBeTruthy();
        expect(service.shortTitle).toBeTruthy();
        expect(service.title).toBeTruthy();
        expect(service.description).toBeTruthy();
        expect(Array.isArray(service.bullets)).toBe(true);
        expect(service.bullets.length).toBeGreaterThan(0);
      }
    });

    it("all service ids are unique", () => {
      const ids = services.map((s) => s.id);
      expect(new Set(ids).size).toBe(ids.length);
    });

    it("all hrefs start with /services/", () => {
      for (const service of services) {
        expect(service.href).toMatch(/^\/services\//);
      }
    });

    it("contains core services (seo, geo, aeo, google-ads)", () => {
      const ids = services.map((s) => s.id);
      expect(ids).toContain("seo");
      expect(ids).toContain("geo");
      expect(ids).toContain("aeo");
      expect(ids).toContain("google-ads");
    });
  });

  describe("faqItems", () => {
    it("is a non-empty array", () => {
      expect(faqItems.length).toBeGreaterThan(0);
    });

    it("each item has a question and answer", () => {
      for (const item of faqItems) {
        expect(item.question).toBeTruthy();
        expect(item.answer).toBeTruthy();
      }
    });

    it("all questions end with a question mark", () => {
      for (const item of faqItems) {
        expect(item.question.trim()).toMatch(/\?$/);
      }
    });

    it("answers are substantive (at least 20 characters)", () => {
      for (const item of faqItems) {
        expect(item.answer.length).toBeGreaterThanOrEqual(20);
      }
    });
  });
});
