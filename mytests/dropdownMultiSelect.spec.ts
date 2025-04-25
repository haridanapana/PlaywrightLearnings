const {webkit,firefox,chromium}= require('playwright');
import { test, expect,Browser,Page } from '@playwright/test';

test('dropdown multiselect test',async()=>{
    const browser:Browser=await chromium.launch({headless: false});
    const page: Page = await browser.newPage();
    await page.goto('https://freelance-learn-automation.vercel.app/signup');
    await page.locator('#hobbies').selectOption(['Playing','Swimming']);
    await page.waitForTimeout(3000);
    await browser.close();



});