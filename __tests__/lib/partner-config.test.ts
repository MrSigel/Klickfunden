import {
  partnerPackages,
  partnerStatuses,
  paymentStatuses,
  requestStatuses,
  excludedPartnerAreas,
  packageDetails,
  monthKey,
  lastFriday,
  nextLastFriday,
} from "@/lib/partner-config";

describe("partner-config", () => {
  describe("partnerPackages", () => {
    it("contains keyword, optimization and individual packages", () => {
      expect(partnerPackages.keyword).toEqual({ name: "Keyword Support Paket", price: 49, quota: 4 });
      expect(partnerPackages.optimization).toEqual({ name: "Vollständige Optimierung", price: 499, quota: 0 });
      expect(partnerPackages.individual).toEqual({ name: "Individuelle Hilfe", price: null, quota: 0 });
    });
  });

  describe("status arrays", () => {
    it("has expected partner statuses", () => {
      expect(partnerStatuses).toContain("wartet_auf_pruefung");
      expect(partnerStatuses).toContain("akzeptiert");
      expect(partnerStatuses).toContain("abgelehnt");
      expect(partnerStatuses).toContain("aktiv");
      expect(partnerStatuses).toContain("gesperrt");
      expect(partnerStatuses).toContain("geloescht");
      expect(partnerStatuses).toHaveLength(6);
    });

    it("has expected payment statuses", () => {
      expect(paymentStatuses).toContain("offen");
      expect(paymentStatuses).toContain("bezahlt");
      expect(paymentStatuses).toHaveLength(5);
    });

    it("has expected request statuses", () => {
      expect(requestStatuses).toContain("neu");
      expect(requestStatuses).toContain("in_bearbeitung");
      expect(requestStatuses).toContain("beantwortet");
      expect(requestStatuses).toContain("archiviert");
      expect(requestStatuses).toHaveLength(4);
    });
  });

  describe("excludedPartnerAreas", () => {
    it("contains known exclusions", () => {
      expect(excludedPartnerAreas).toContain("webdesign");
      expect(excludedPartnerAreas).toContain("seo-agentur");
      expect(excludedPartnerAreas).toContain("ki-automation");
      expect(excludedPartnerAreas.length).toBeGreaterThan(0);
    });
  });

  describe("packageDetails", () => {
    it("returns the correct package for valid keys", () => {
      expect(packageDetails("keyword")).toEqual(partnerPackages.keyword);
      expect(packageDetails("optimization")).toEqual(partnerPackages.optimization);
      expect(packageDetails("individual")).toEqual(partnerPackages.individual);
    });

    it("returns null for invalid keys", () => {
      expect(packageDetails("nonexistent")).toBeNull();
      expect(packageDetails("")).toBeNull();
    });
  });

  describe("monthKey", () => {
    it("returns YYYY-MM format for a given date", () => {
      expect(monthKey(new Date("2025-01-15T00:00:00Z"))).toBe("2025-01");
      expect(monthKey(new Date("2025-12-01T00:00:00Z"))).toBe("2025-12");
    });

    it("pads single-digit months with a leading zero", () => {
      expect(monthKey(new Date("2025-03-05T00:00:00Z"))).toBe("2025-03");
    });

    it("uses current date when no argument is provided", () => {
      const now = new Date();
      const expected = `${now.getUTCFullYear()}-${String(now.getUTCMonth() + 1).padStart(2, "0")}`;
      expect(monthKey()).toBe(expected);
    });
  });

  describe("lastFriday", () => {
    it("returns the last Friday of January 2025", () => {
      const result = lastFriday(2025, 0);
      expect(result.getUTCDay()).toBe(5);
      expect(result.getUTCFullYear()).toBe(2025);
      expect(result.getUTCMonth()).toBe(0);
      expect(result.getUTCDate()).toBe(31);
    });

    it("returns the last Friday of February 2025", () => {
      const result = lastFriday(2025, 1);
      expect(result.getUTCDay()).toBe(5);
      expect(result.getUTCMonth()).toBe(1);
      expect(result.getUTCDate()).toBe(28);
    });

    it("returns the last Friday of March 2025", () => {
      const result = lastFriday(2025, 2);
      expect(result.getUTCDay()).toBe(5);
      expect(result.getUTCMonth()).toBe(2);
      expect(result.getUTCDate()).toBe(28);
    });

    it("returns the last Friday of December 2025", () => {
      const result = lastFriday(2025, 11);
      expect(result.getUTCDay()).toBe(5);
      expect(result.getUTCMonth()).toBe(11);
      expect(result.getUTCDate()).toBe(26);
    });

    it("always returns a Friday (day 5)", () => {
      for (let month = 0; month < 12; month++) {
        const result = lastFriday(2025, month);
        expect(result.getUTCDay()).toBe(5);
      }
    });
  });

  describe("nextLastFriday", () => {
    it("returns the upcoming last-Friday when before this month's last Friday", () => {
      const date = new Date("2025-01-01T00:00:00Z");
      const result = nextLastFriday(date);
      expect(result.getUTCDay()).toBe(5);
      expect(result.getUTCMonth()).toBe(0);
      expect(result.getUTCDate()).toBe(31);
    });

    it("returns next month's last Friday when past this month's last Friday", () => {
      const lf = lastFriday(2025, 0);
      const dayAfter = new Date(lf.getTime() + 86_400_000);
      const result = nextLastFriday(dayAfter);
      expect(result.getUTCDay()).toBe(5);
      expect(result.getUTCMonth()).toBe(1);
    });

    it("uses current date when no argument is provided", () => {
      const result = nextLastFriday();
      expect(result.getUTCDay()).toBe(5);
      expect(result >= new Date()).toBe(true);
    });
  });
});
