const {webkit,firefox,chromium}= require('playwright');
import { test, expect,Browser,Page } from '@playwright/test';

test('multiple tabs ',async({})=>{
    const browser:Browser=await chromium.launch({headless: false});
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://freelance-learn-automation.vercel.app/login");


    const[newPage] = await Promise.all(
          [
             context.waitForEvent("page"),
             //page.getByRole('link').nth(3).click()
             page.locator("(//a[contains(@href,'facebook')])[1]").click()
          ]
       
    )
    
    await newPage.getByRole('textbox',{name:'Email or Phone number'});
    await newPage.waitForTimeout(1000);
});