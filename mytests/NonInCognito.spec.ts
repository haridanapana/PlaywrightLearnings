const {webkit,firefox,chromium}= require('playwright');
import { test, expect,Browser,Page,Locator,FrameLocator,BrowserContext} from '@playwright/test';
import { channel } from 'diagnostics_channel';

//run in normal mode without incognito mode
test('No Incognito Test',async()=>{
    //const browser:Browser=await chromium.launch({headless: false,channel: 'chrome'});launchPersistentContext
    const browser:BrowserContext=await chromium.launchPersistentContext('',{headless: false,channel: 'chrome'});// Create a new browser context

//while launching the url it is opening 2 windows and one is empty and other is url launching in it
    const pages= await browser.pages();
    const page:Page=pages[0];
   // const page: Page = await browser.newPage();
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