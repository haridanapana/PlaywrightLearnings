const {webkit,firefox,chromium}= require('playwright');
import { test, expect,Browser,Page } from '@playwright/test';

test('typecharacterSequentially test',async()=>{
    const browser:Browser=await chromium.launch({headless: false});
    const page: Page = await browser.newPage();
    await page.goto('https://www.flipkart.com/');
    //drag and drop
    await page.getByPlaceholder('Search for Products, Brands and More').pressSequentially('macbook',{delay:500});
    await page.waitForTimeout(10000);

    await browser.close();



});