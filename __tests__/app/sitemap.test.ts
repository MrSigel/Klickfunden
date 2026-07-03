import sitemap from "@/app/sitemap";

describe("sitemap", () => {
  const entries = sitemap();

  it("returns a non-empty array", () => {
    expect(entries.length).toBeGreaterThan(0);
  });

  it("includes the homepage with highest priority", () => {
    const home = entries.find((e) => e.url === "https://www.klickfunden.de");
    expect(home).toBeDefined();
    expect(home!.priority).toBe(1);
  });

  it("all URLs start with the base URL", () => {
    for (const entry of entries) {
      expect(entry.url).toMatch(/^https:\/\/www\.klickfunden\.de/);
    }
  });

  it("all entries have lastModified set", () => {
    for (const entry of entries) {
      expect(entry.lastModified).toBeDefined();
    }
  });

  it("all entries have a valid changeFrequency", () => {
    const validFreqs = ["always", "hourly", "daily", "weekly", "monthly", "yearly", "never"];
    for (const entry of entries) {
      expect(validFreqs).toContain(entry.changeFrequency);
    }
  });

  it("all priorities are between 0 and 1", () => {
    for (const entry of entries) {
      expect(entry.priority).toBeGreaterThanOrEqual(0);
      expect(entry.priority).toBeLessThanOrEqual(1);
    }
  });

  it("includes service pages", () => {
    const urls = entries.map((e) => e.url);
    expect(urls).toContain("https://www.klickfunden.de/services/seo");
    expect(urls).toContain("https://www.klickfunden.de/services/geo");
    expect(urls).toContain("https://www.klickfunden.de/services/aeo");
  });

  it("includes static pages", () => {
    const urls = entries.map((e) => e.url);
    expect(urls).toContain("https://www.klickfunden.de/ueber-uns");
    expect(urls).toContain("https://www.klickfunden.de/faq");
    expect(urls).toContain("https://www.klickfunden.de/impressum");
    expect(urls).toContain("https://www.klickfunden.de/datenschutz");
  });

  it("includes industry landing pages", () => {
    const urls = entries.map((e) => e.url);
    expect(urls).toContain("https://www.klickfunden.de/seo-fuer-vereine");
    expect(urls).toContain("https://www.klickfunden.de/seo-fuer-handwerker");
    expect(urls).toContain("https://www.klickfunden.de/seo-fuer-dienstleister");
  });

  it("includes question pages", () => {
    const urls = entries.map((e) => e.url);
    expect(urls).toContain("https://www.klickfunden.de/fragen/was-ist-geo");
    expect(urls).toContain("https://www.klickfunden.de/fragen/was-ist-aeo");
  });

  it("includes sibylle pages", () => {
    const urls = entries.map((e) => e.url);
    expect(urls).toContain("https://www.klickfunden.de/sibylle");
    expect(urls).toContain("https://www.klickfunden.de/sibylle/ueber-mich");
    expect(urls).toContain("https://www.klickfunden.de/sibylle/faq");
  });

  it("does not include admin or login pages", () => {
    const urls = entries.map((e) => e.url);
    const adminUrls = urls.filter((u) => u.includes("/admin") || u.includes("/login"));
    expect(adminUrls).toHaveLength(0);
  });

  it("has no duplicate URLs", () => {
    const urls = entries.map((e) => e.url);
    expect(new Set(urls).size).toBe(urls.length);
  });
});
