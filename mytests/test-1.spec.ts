import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.makemytrip.global/?cc=am&redirectedBy=gl');
  await page.locator('section').filter({ hasText: 'Login now to get FLAT 12% OFF' }).locator('span').first().click();
  await page.getByRole('textbox', { name: 'From NYC, All airports-NY' }).click();
  await page.getByRole('textbox', { name: 'From', exact: true }).fill('benga');
  await page.getByText('Bengaluru International').click();
  await page.getByRole('textbox', { name: 'To LAX, Los Angeles-CA United' }).click();
  await page.getByRole('textbox', { name: 'To', exact: true }).fill('Delhi');
  await page.getByText('New DelhiDELIndira Gandhi').click();
  await page.getByLabel('Wed Mar 26').getByText('26').click();
});