const {webkit,chromium}= require('playwright');
import { test, expect,Browser,Page } from '@playwright/test';
const testdata=JSON.parse(JSON.stringify(require("../testmultidata.json")))

test.describe('Data Driven Login Test',function()
{
    for(const data of testdata)
    {
      test.describe(`Login test with user ${data.id}`,function()
      {

        test('login to Application',async()=>{
          const browser:Browser=await chromium.launch({headless: false});
          const page: Page = await browser.newPage();
          await page.goto('https://falcon-awsfit.highradius.com/RRDMSProject/signin.do');
          const emailId= await page.locator('//input[contains(@name,"username")]');
          const password= await page.locator('//input[contains(@name,"password")]');
          const loginButton= await page.locator('//a[contains(@class,"submitButton")]//span[text()="SUBMIT"]');
      
          await emailId.fill(data.username);
          await password.fill(data.password);
          await loginButton.click()
      
          });


      })

    }
   
})
