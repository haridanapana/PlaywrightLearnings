const {webkit,firefox,chromium}= require('playwright');
import { test, expect,Browser,Page } from '@playwright/test';

test('mousehover test',async()=>{
    const browser:Browser=await chromium.launch({headless: false});
    const page: Page = await browser.newPage();
    await page.goto('https://www.spicejet.com/');

    await page.getByText('Add-ons').first().hover();
    await page.getByText('Visa Services').first().click();
    
    await page.waitForTimeout(3000);
    await browser.close();



});