import { formatCurrency, adminLeads, adminClients } from "@/lib/admin-data";

describe("admin-data", () => {
  describe("formatCurrency", () => {
    it("formats a positive number in EUR with German locale", () => {
      const result = formatCurrency(1234.5);
      expect(result).toContain("1.234,50");
      expect(result).toContain("€");
    });

    it("formats zero", () => {
      const result = formatCurrency(0);
      expect(result).toContain("0,00");
      expect(result).toContain("€");
    });

    it("formats negative numbers", () => {
      const result = formatCurrency(-99.99);
      expect(result).toContain("99,99");
      expect(result).toContain("€");
    });

    it("respects maximumFractionDigits: 2", () => {
      const result = formatCurrency(10.999);
      expect(result).toContain("11,00");
    });

    it("formats whole numbers with two decimal places", () => {
      const result = formatCurrency(500);
      expect(result).toContain("500,00");
    });

    it("formats large numbers with thousand separators", () => {
      const result = formatCurrency(1000000);
      expect(result).toContain("1.000.000,00");
    });
  });

  describe("initial data arrays", () => {
    it("adminLeads starts empty", () => {
      expect(adminLeads).toEqual([]);
    });

    it("adminClients starts empty", () => {
      expect(adminClients).toEqual([]);
    });
  });
});
