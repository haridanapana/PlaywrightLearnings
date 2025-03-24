const {webkit,firefox,chromium}= require('playwright');
import { test, expect,Browser,Page } from '@playwright/test';
import path from 'path'

test('filesUpload test',async()=>{
    const browser:Browser=await chromium.launch({headless: false});
    const page: Page = await browser.newPage();
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    //multiple file uplaod
    await page.locator('#filesToUpload').setInputFiles([path.join("/PlayWrightDemo/example.png"),
        path.join("/Users/admin/reports.html"),
    ]);
    await page.waitForTimeout(3000);
    //deselect the file uplaod
    await page.locator('#filesToUpload').setInputFiles([]);
    
    //upload the buffer file it means create a fle and upload
    await page.locator('#filesToUpload').setInputFiles({
        name: 'hari_Resume.txt',
        mimeType: 'text/plain',
        buffer: Buffer.from("This is my resume")
    }

    );
    await page.waitForTimeout(10000);

    await browser.close();



});