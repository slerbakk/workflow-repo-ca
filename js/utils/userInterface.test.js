import { describe, it, expect } from "vitest"; // Import Vitest functions
import { isActivePath } from "./userInterface.js"; // Adjust the path based on your actual file structure

describe("isActivePath", () => {
  it("should return true when current path matches href exactly", () => {
    expect(isActivePath("/about", "/about")).toBe(true);
    expect(isActivePath("/contact", "/contact")).toBe(true);
  });

  it('should return true when href is "/" and current path is either "/" or "/index.html"', () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  it('should return false when href is "/" and current path is neither "/" nor "/index.html"', () => {
    expect(isActivePath("/", "/about")).toBe(false);
    expect(isActivePath("/", "/contact")).toBe(false);
  });

  it("should return true when current path includes href", () => {
    expect(isActivePath("/about", "/about/team")).toBe(true);
    expect(isActivePath("/products", "/products/details")).toBe(true);
  });

  it("should return false when current path does not include href", () => {
    expect(isActivePath("/about", "/home")).toBe(false);
    expect(isActivePath("/contact", "/about")).toBe(false);
  });
});
