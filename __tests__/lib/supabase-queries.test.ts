import { getJsonString } from "@/lib/supabase/queries";

jest.mock("@/lib/supabase/server", () => ({
  getSupabaseAdmin: jest.fn(),
  getSupabaseAnon: jest.fn(),
}));

describe("getJsonString", () => {
  it("returns the value for a valid key in a JSON object", () => {
    expect(getJsonString({ name: "Alice", email: "alice@example.com" }, "name")).toBe("Alice");
    expect(getJsonString({ name: "Alice", email: "alice@example.com" }, "email")).toBe("alice@example.com");
  });

  it("returns empty string for a missing key", () => {
    expect(getJsonString({ name: "Alice" }, "missing")).toBe("");
  });

  it("returns empty string when value is not a string", () => {
    expect(getJsonString({ count: 42 }, "count")).toBe("");
    expect(getJsonString({ active: true }, "active")).toBe("");
    expect(getJsonString({ nested: { a: 1 } }, "nested")).toBe("");
    expect(getJsonString({ items: [1, 2] }, "items")).toBe("");
  });

  it("returns empty string for null input", () => {
    expect(getJsonString(null, "key")).toBe("");
  });

  it("returns empty string for a string input", () => {
    expect(getJsonString("not-an-object", "key")).toBe("");
  });

  it("returns empty string for a number input", () => {
    expect(getJsonString(42, "key")).toBe("");
  });

  it("returns empty string for a boolean input", () => {
    expect(getJsonString(true, "key")).toBe("");
  });

  it("returns empty string for an array input", () => {
    expect(getJsonString([1, 2, 3], "key")).toBe("");
  });

  it("handles undefined values in the object", () => {
    expect(getJsonString({ name: undefined } as Record<string, unknown>, "name")).toBe("");
  });

  it("handles null values in the object", () => {
    expect(getJsonString({ name: null }, "name")).toBe("");
  });

  it("returns empty string for key in object", () => {
    expect(getJsonString({ value: "" }, "value")).toBe("");
  });
});
