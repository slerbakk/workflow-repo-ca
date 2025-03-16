import { test, expect } from "@playwright/test";

test("Navigate to the home page", async ({ page }) => {
  // Navigate to the home page
  await page.goto("http://127.0.0.1:5500"); // Replace with the actual URL of your home page
});

test("Wait for the venue list to load", async ({ page }) => {
  // Navigate to the home page (replace with the correct URL)
  await page.goto("http://127.0.0.1:5500"); // Adjust the URL as needed

  // Create a Locator for the venue list element (adjust the selector based on your app)
  const venueList = page.locator("#venue-container");

  // Wait for the venue list to be visible
  await venueList.waitFor({ state: "visible", timeout: 5000 });

  // Verify that the venue list is visible
  await expect(venueList).toBeVisible();
});

test("Click the first venue item", async ({ page }) => {
  await page.goto("http://localhost:5500");

  const venueList = page.locator("#venue-container");
  await venueList.waitFor({ state: "visible" });

  const firstVenueLink = venueList.locator("a").first();

  await firstVenueLink.click();
  const heading = page.locator("h1");
  await expect(heading).toContainText("Venue details");
});
