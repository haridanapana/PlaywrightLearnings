const {webkit,firefox,chromium}= require('playwright');
import { test, expect,Browser,Page } from '@playwright/test';

test('register test',async()=>{
    const browser:Browser=await chromium.launch({headless: true});
    const page: Page = await browser.newPage();
    await page.goto('https://orangehrm.com/en/30-day-free-trial');

    // Locator id, className, text,css,xpath
    // const fullName= await page.locator('form#Form_getForm>>#Form_getForm_Name').fill('Naveen');
    // const labelText=await page.locator('form#Form_getForm>> text=Get Your Free Trial').click();
    
    // const form =await page.locator('form#Form_getForm');
    // const getYourFreeTrialButton=page.getByRole('button',{name: 'Get Your Free Trial'})
    // await form.locator(getYourFreeTrialButton).click();
    //why we are not clicking directly because if with same button appears twice or more than that then if i want to click the button which is in that form thenthis is useful
    //line 13,14,15 can be combined
    await page.locator('form#Form_getForm>>#Form_getForm_Name').fill('Naveen');
    await page.locator('form#Form_getForm').getByRole('button',{name: 'Get Your Free Trial'}).click();
    await page.waitForTimeout(3000);
    await browser.close();



});