import { beforeEach, describe, it, expect } from "vitest";
import { getUsername } from "./storage.js";

// Mock the localStorage
globalThis.localStorage = {
  store: {},

  getItem(key) {
    return this.store[key] || null;
  },

  setItem(key, value) {
    this.store[key] = value;
  },

  removeItem(key) {
    delete this.store[key];
  },

  clear() {
    this.store = {};
  },
};

describe("getUsername", () => {
  // Clear localStorage before each test
  beforeEach(() => {
    localStorage.clear();
  });

  it("should return the name from the user object in storage when user exists", () => {
    // Mock a user object
    const mockUser = { name: "John Doe" };

    // Save it to localStorage
    localStorage.setItem("user", JSON.stringify(mockUser));

    // Test that getUsername returns the correct name
    expect(getUsername()).toBe("John Doe");
  });

  it("should return null when no user object exists in storage", () => {
    // Ensure localStorage is empty or contains no user
    localStorage.removeItem("user");

    // Test that getUsername returns null when there is no user object
    expect(getUsername()).toBeNull();
  });
});
