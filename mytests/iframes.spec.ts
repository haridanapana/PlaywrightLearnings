const {webkit,firefox,chromium}= require('playwright');
import { test, expect,Browser,Page } from '@playwright/test';

test('iframe test',async()=>{
    const browser:Browser=await chromium.launch({headless: false});
    const page: Page = await browser.newPage();
    await page.goto('https://docs.oracle.com/javase/8/docs/api');
    const frame=await page.frameLocator('//frame[@name="packageListFrame"]');
    await frame.getByRole('link',{name:'java.applet'}).click();

    await page.waitForTimeout(2000);



});