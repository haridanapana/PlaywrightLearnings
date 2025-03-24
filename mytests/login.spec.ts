const {webkit,firefox,chromium}= require('playwright');
import { test, expect,Browser,Page } from '@playwright/test';

test('login test',async()=>{
    const browser:Browser=await firefox.launch({headless: false});
    const page: Page = await browser.newPage();
    await page.goto('https://falcon-awsfit.highradius.com/RRDMSProject/signin.do');
    const emailId= await page.locator('//input[contains(@name,"username")]');
    const password= await page.locator('//input[contains(@name,"password")]');
    const loginButton= await page.locator('//a[contains(@class,"submitButton")]//span[text()="SUBMIT"]');

    await emailId.fill('test_core_23474');
    await password.fill("Feb@4321");
    await loginButton.click();

  // Verify if the particular element is visible
  const elementSelector = '(//div[@class="TopHeaderUserDetails"])[1]';
  const isVisible = await page.waitForSelector(elementSelector);
  console.log(isVisible);
  if (isVisible) {
    console.log('Login Success');
  } else {
    console.log('Login Not successful');
  }
    await page.screenshot({path: 'example.png'});
  
    await browser.close();



});