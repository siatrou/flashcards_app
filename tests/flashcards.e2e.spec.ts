import { expect, test } from "@playwright/test";

test.describe("Spanish Flashcards E2E", () => {
  test("home page shows primary navigation", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { name: /spanish flashcards/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /study mode/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /quiz mode/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /stats page/i })).toBeVisible();
  });

  test("study flow: choose category, flip card, answer, and progress", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: /study mode/i }).click();

    await expect(page.getByRole("heading", { name: /choose a study category/i })).toBeVisible();
    await page.getByRole("button", { name: /animals/i }).click();

    await expect(page.getByRole("heading", { name: /study: animals/i })).toBeVisible();
    await expect(page.getByText(/card 1 of/i)).toBeVisible();
    await expect(page.getByRole("button", { name: /✅ right/i })).toHaveCount(0);

    await page.getByRole("button", { name: /el gato/i }).click();
    await expect(page.getByRole("button", { name: /✅ right/i })).toBeVisible();
    await expect(page.getByRole("button", { name: /❌ wrong/i })).toBeVisible();

    await page.getByRole("button", { name: /✅ right/i }).click();
    await expect(page.getByText(/card 2 of/i)).toBeVisible();
  });

  test("study flow tracks wrong answers and finishes", async ({ page }) => {
    await page.goto("/study/animals");

    for (let index = 0; index < 3; index += 1) {
      const cardButton = page.locator(".flashcard");
      await cardButton.click();
      await page.getByRole("button", { name: /❌ wrong/i }).click();
    }

    await expect(page.getByText(/reviewed all cards/i)).toBeVisible();
    await expect(page.getByText(/incorrect cards stored this round: 3/i)).toBeVisible();
  });
});
