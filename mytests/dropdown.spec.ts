const {webkit,firefox,chromium}= require('playwright');
import { test, expect,Browser,Page } from '@playwright/test';

test('dropdown test',async()=>{
    const browser:Browser=await chromium.launch({headless: false});
    const page: Page = await browser.newPage();
    await page.goto('https://www.magupdate.co.uk/magazine-subscription/phrr');

    const country_dropdown='select#Contact_CountryCode';
    // await page.selectOption(country_dropdown,{index: 0});
    // await page.selectOption(country_dropdown,{value: 'AU'});
    // await page.selectOption(country_dropdown,{label: 'India'});
    
    //to get all options
    const allOptions=await page.$$(country_dropdown+'>option');
    console.log(allOptions.length);

    for(const e of allOptions){
        const text=await e.textContent();
        console.log(text);
        if(text=='India'){
            await page.selectOption(country_dropdown,{label: text});
            break;
        }
    }
    await page.waitForTimeout(5000);
    await browser.close();



});