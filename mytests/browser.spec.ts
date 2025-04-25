const {webkit,firefox,chromium}= require('playwright');
import { test, expect,Browser,Page, BrowserContext } from '@playwright/test';

test('login test',async()=>{
    const browser:Browser=await chromium.launch({headless: true,channel: 'chrome'});

    //browser context 1
    const browserContext1: BrowserContext=await browser.newContext();
    const page1: Page = await browserContext1.newPage();

    //browser context 2
    const browserContext2: BrowserContext=await browser.newContext();
    const page2: Page = await browserContext1.newPage();

    
    await page1.goto('https://falcon-awsfit.highradius.com/RRDMSProject/signin.do');
    const emailId= await page1.locator('//input[contains(@name,"username")]');
    const password= await page1.locator('//input[contains(@name,"password")]');
    const loginButton= await page1.locator('//a[contains(@class,"submitButton")]//span[text()="SUBMIT"]');

    await emailId.fill('test_core_23474');
    await password.fill("Feb@4321");
    await loginButton.click();

    await page2.goto('https://falcon-awsfit.highradius.com/RRDMSProject/signin.do');
    const emailId1= await page2.locator('//input[contains(@name,"username")]');
    const password1= await page2.locator('//input[contains(@name,"password")]');
    const loginButton1= await page2.locator('//a[contains(@class,"submitButton")]//span[text()="SUBMIT"]');

    await emailId1.fill('test_session_23474');
    await password1.fill("Feb@4321");
    await loginButton1.click();

    await browserContext1.close();
    await browserContext2.close();

    await browser.close();

});
test('login test1',async()=>{
    const browser:Browser=await chromium.launch({headless: true,channel: 'chrome'});

    //browser context 1
    const browserContext1: BrowserContext=await browser.newContext();
    const page1: Page = await browserContext1.newPage();

    //browser context 2
    const browserContext2: BrowserContext=await browser.newContext();
    const page2: Page = await browserContext1.newPage();

    
    await page1.goto('https://falcon-awsfit.highradius.com/RRDMSProject/signin.do');
    const emailId= await page1.locator('//input[contains(@name,"username")]');
    const password= await page1.locator('//input[contains(@name,"password")]');
    const loginButton= await page1.locator('//a[contains(@class,"submitButton")]//span[text()="SUBMIT"]');

    await emailId.fill('test_core_23474');
    await password.fill("Feb@4321");
    await loginButton.click();

    await page2.goto('https://falcon-awsfit.highradius.com/RRDMSProject/signin.do');
    const emailId1= await page2.locator('//input[contains(@name,"username")]');
    const password1= await page2.locator('//input[contains(@name,"password")]');
    const loginButton1= await page2.locator('//a[contains(@class,"submitButton")]//span[text()="SUBMIT"]');

    await emailId1.fill('test_session_23474');
    await password1.fill("Feb@4321");
    await loginButton1.click();

    await browserContext1.close();
    await browserContext2.close();

    await browser.close();

});