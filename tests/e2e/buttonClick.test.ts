import { test, expect } from '@playwright/test';

test('the module is imported correctly', async function ({ page }) {
  await page.goto('/');

  const factory = await page.evaluate(() => new DeclarativePayloadSvg.SVGFactory());

  expect(factory).toBeTruthy();
});
