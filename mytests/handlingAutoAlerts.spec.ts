const {webkit,firefox,chromium}= require('playwright');
import { test, expect,Browser,Page } from '@playwright/test';

test('handling Auto alerts Test',async()=>{
    const browser:Browser=await chromium.launch({headless: false});
    const page: Page = await browser.newPage();
    await page.goto('https://www.google.com');
    await page.locator("textArea[name='q']").type("Playwright");
    await page.waitForSelector("//li[@role='presentation']");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter")
    await page.waitForTimeout(5000);
    await browser.close();
});
test.only('handling Auto alerts Loop',async()=>{
    const browser:Browser=await chromium.launch({headless: false});
    const page: Page = await browser.newPage();
    await page.goto('https://www.google.com');
    await page.locator("textArea[name='q']").type("Playwright");
    const list=await page.$$("//li[@role='presentation']");
    for(let i=0;i<list.length;i++){
        
        const text=await list[i].textContent();
        if(text?.includes('automation')){
            await list[i].click();
        }

    }
    await page.waitForTimeout(5000);
    await browser.close();
});