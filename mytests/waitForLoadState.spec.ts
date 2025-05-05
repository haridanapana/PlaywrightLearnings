const {webkit,firefox,chromium}= require('playwright');
import { test, expect,Browser,Page } from '@playwright/test';

test('Working with Load test',async()=>{
    const browser:Browser=await chromium.launch({headless: false});
    const page: Page = await browser.newPage();
    await page.goto('https://freelance-learn-automation.vercel.app/login');
    await page.getByText('New user? Signup'); 
    await page.waitForLoadState("networkidle");
    const count=await page.locator("//input[contains(@type,'checkbox')]");
    expect(count).toBe(8);

});