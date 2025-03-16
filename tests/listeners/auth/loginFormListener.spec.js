import { test, expect } from "@playwright/test";

test.describe("login", () => {
  test("User can login with the right credentials", async ({ page }) => {
    await page.goto("/login");

    await page.locator('input[name="email"]').fill(process.env.USER_EMAIL);
    await page
      .locator('input[name="password"]')
      .fill(process.env.USER_PASSWORD);

    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.getByRole("button", { name: "Logout" })).toBeVisible();
  });

  test("User get error with wrong credentials", async ({ page }) => {
    await page.goto("/login");

    await page.locator('input[name="email"]').fill(process.env.USER_EMAIL);
    await page.locator('input[name="password"]').fill("asdadddasdasad");

    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.locator("#message-container")).toContainText(
      "Invalid email or password",
    );
  });
});
