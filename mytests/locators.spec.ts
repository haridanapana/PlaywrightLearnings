const {webkit,firefox,chromium}= require('playwright');
import { test, expect,Browser,Page } from '@playwright/test';

test.use({viewport:{width:1500,height:800}});

test('lolocators test',async()=>{
    const browser:Browser=await chromium.launch({headless: false});
    const page: Page = await browser.newPage();
    await page.goto('https://falcon-awsfit.highradius.com/RRDMSProject/signin.do');

    console.log(await page.viewportSize()?.width);
    console.log(await page.viewportSize()?.height);


    // Locator id, className, text,css,xpath
    const emailId= await page.locator('//input[contains(@name,"username")]/');
    const password= await page.locator('//input[contains(@name,"password")]');
    
    //getByRole
    await expect(page.getByRole('link',{name: 'SUBMIT'})).toBeVisible;
    const loginButton= await page.locator('//a[contains(@class,"submitButton")]//span[text()="SUBMIT"]');
    
    //locator('//a[contains(@class,"submitButton")]//span[text()="SUBMIT"]');

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