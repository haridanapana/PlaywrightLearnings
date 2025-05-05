const {webkit,firefox,chromium}= require('playwright');
import { test, expect,Browser,Page,Locator } from '@playwright/test';


async function findElementSmart(
    page: Page,
    locators: string[],
    referenceSelector: string,
    fallbackTagName: string,
    relativePosition: 'below' | 'above' | 'toLeftOf' | 'toRightOf' | 'near',
): Promise<Locator> 
{
    // Try using normal locators first
    for (const locator of locators) {
        const element = page.locator(locator);
        if (await element.count() > 0) {
            console.log(`Found element using: ${locator}`);
            return element;
        } else {
            console.log(`Not found element using: ${locator}`);
        }
    }

    // Try relative locators if all fail
    try {
        console.log('Trying relative locator...');
        const reference = page.locator(referenceSelector);
        let relativeElement: Locator;

        switch (relativePosition) {
            case 'below':
                relativeElement = page.locator(`${fallbackTagName}:below(${referenceSelector})`);
                break;

            case 'above':
                relativeElement = page.locator(`${fallbackTagName}:above(${referenceSelector})`);
                break;

            case 'toLeftOf':
                relativeElement = page.locator(`${fallbackTagName}:to-left-of(${referenceSelector})`);
                break;

            case 'toRightOf':
                relativeElement = page.locator(`${fallbackTagName}:to-right-of(${referenceSelector})`);
                break;

            case `near`:
                relativeElement = page.locator(`${fallbackTagName}:near(${referenceSelector})`);
                break;

            default:
                throw new Error(`Invalid relative position: ${relativePosition}`);
        }

        if (await relativeElement.count() > 0) {
            console.log(`Found element using relative locator: ${relativePosition}`);
            return relativeElement;
        } else {
            throw new Error(`Element not found using relative locator: ${relativePosition}`);
        }
    } catch (error) {
        console.error('Error finding element:', error);
        throw error;
    }
}
test('login test find elements smart',async()=>{
    const browser:Browser=await chromium.launch({headless: false});
    const page: Page = await browser.newPage();
    await page.goto('https://falcon-awsfit.highradius.com/RRDMSProject/signin.do');
    const emailId= await page.locator('//input[contains(@name,"username")]');
    const password= await page.locator('//input[contains(@name,"password")]');
    await emailId.fill('test_core_23474');
    await password.fill("Feb@4321");
    //const loginButton= await page.locator('//a[contains(@class,"submitButton")]//span[text()="SUBMIT"]');

    try{
        const loginButton =await findElementSmart(
        page,
        ['#SignIn1','[name="SignIn2"]','//a[contains(@class,"submit1")]' ] ,
        '[name="password"]',
        'button',
        'below'
        );

    
    await loginButton.click();
    }catch(Error){
        console.log("login button not found in any method");
        throw Error;
    }

});