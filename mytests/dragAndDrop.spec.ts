const {webkit,firefox,chromium}= require('playwright');
import { test, expect,Browser,Page } from '@playwright/test';

test('dragAndDrop test',async()=>{
    const browser:Browser=await chromium.launch({headless: false});
    const page: Page = await browser.newPage();
    await page.goto('https://jqueryui.com/resources/demos/droppable/default.html');
    //drag and drop
    await page.locator('#draggable').dragTo(page.locator('#droppable'));
    await page.waitForTimeout(10000);

    await browser.close();



    /*
         Manually Drop
         await page.locator('#item-to-be-dragged').hover();
         await page.mouse.down();
         await page.locator('#item-to-drop-at').hover();
         await page.mouse.up();
    */



});