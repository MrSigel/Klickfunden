import { resources, resourceBySlug, type Resource, type Field } from "@/lib/admin-resources";

describe("admin-resources", () => {
  describe("resources array", () => {
    it("contains at least one resource", () => {
      expect(resources.length).toBeGreaterThan(0);
    });

    it("each resource has required fields", () => {
      for (const resource of resources) {
        expect(resource.slug).toBeTruthy();
        expect(resource.table).toBeTruthy();
        expect(resource.title).toBeTruthy();
        expect(resource.singular).toBeTruthy();
        expect(resource.description).toBeTruthy();
        expect(Array.isArray(resource.search)).toBe(true);
        expect(Array.isArray(resource.fields)).toBe(true);
        expect(resource.fields.length).toBeGreaterThan(0);
      }
    });

    it("all slugs are unique", () => {
      const slugs = resources.map((r) => r.slug);
      expect(new Set(slugs).size).toBe(slugs.length);
    });

    it("all table names are unique", () => {
      const tables = resources.map((r) => r.table);
      expect(new Set(tables).size).toBe(tables.length);
    });

    it("each field has a key and label", () => {
      for (const resource of resources) {
        for (const field of resource.fields) {
          expect(field.key).toBeTruthy();
          expect(field.label).toBeTruthy();
        }
      }
    });

    it("select fields have options defined", () => {
      for (const resource of resources) {
        for (const field of resource.fields) {
          if (field.type === "select") {
            expect(field.options).toBeDefined();
            expect(field.options!.length).toBeGreaterThan(0);
          }
        }
      }
    });
  });

  describe("known resources", () => {
    const expectedSlugs = [
      "anfragen", "leads", "audits", "keywords", "ads",
      "reports", "aufgaben", "content", "einstellungen",
    ];

    it.each(expectedSlugs)("contains resource with slug '%s'", (slug) => {
      const resource = resources.find((r) => r.slug === slug);
      expect(resource).toBeDefined();
    });
  });

  describe("resourceBySlug", () => {
    it("returns the correct resource for a valid slug", () => {
      const result = resourceBySlug("anfragen");
      expect(result).toBeDefined();
      expect(result!.slug).toBe("anfragen");
      expect(result!.table).toBe("admin_inquiries");
    });

    it("returns the correct resource for another valid slug", () => {
      const result = resourceBySlug("keywords");
      expect(result).toBeDefined();
      expect(result!.slug).toBe("keywords");
      expect(result!.table).toBe("admin_keywords");
    });

    it("returns undefined for an unknown slug", () => {
      expect(resourceBySlug("nonexistent")).toBeUndefined();
    });

    it("returns undefined for an empty string", () => {
      expect(resourceBySlug("")).toBeUndefined();
    });
  });
});
