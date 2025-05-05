const {webkit,firefox,chromium}= require('playwright');
import { test, expect,Browser,Page } from '@playwright/test';

test('handle alerts Test',async()=>{
    const browser:Browser=await chromium.launch({headless: false});
    const page: Page = await browser.newPage();
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    await page.waitForTimeout(5000);

    page.on('dialog',async(dialog_window)=>{
       expect(dialog_window.type()).toContain('alert');
       expect(dialog_window.message()).toContain('I am a JS Alert');
       await dialog_window.accept();
    })
    await page.locator("//button[contains(text(),'Click for JS Alert')]").click();
    
    await page.waitForTimeout(5000);
    await browser.close();
});
test('handle alerts Prompt',async()=>{
    const browser:Browser=await chromium.launch({headless: false});
    const page: Page = await browser.newPage();
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    await page.waitForTimeout(5000);

    page.on('dialog',async(dialog_window)=>{
       expect(dialog_window.type()).toContain('prompt');
       expect(dialog_window.message()).toContain('I am a JS prompt');
       await dialog_window.accept('Hari');
    })
    await page.locator("//button[contains(text(),'Click for JS Prompt')]").click();
    
    await page.waitForTimeout(5000);
    await browser.close();
});

