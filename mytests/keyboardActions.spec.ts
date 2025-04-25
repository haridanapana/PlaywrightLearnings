const {webkit,firefox,chromium}= require('playwright');
import { test, expect,Browser,Page } from '@playwright/test';

test('keyBoardActions test',async()=>{
    const browser:Browser=await chromium.launch({headless: false});
    const page: Page = await browser.newPage();
    await page.goto('https://google.com');
    const textArea=await page.locator("//textarea[contains(@id,'APjFqb')]");

    await textArea.fill("Java");   
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(10000);

    await page.locator("//textarea[contains(@id,'APjFqb')]").focus();
    await page.keyboard.type('Java Programming');
    await page.keyboard.down('Shift');
    

    for(let i=0;i<11;i++){
        await page.keyboard.press('ArrowLeft');
    }
    await page.keyboard.up('Shift');
    await page.keyboard.press('Backspace');

    await browser.close();



});