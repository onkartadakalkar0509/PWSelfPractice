import {test , expect } from '@playwright/test';
test('Date Picker Handling', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");    
    const year = "2027";
    const month ="June";
    const date = "30";
    
    const datepicker = page.locator("//input[@id='datepicker']")
    await datepicker.click();
    
    while(true)
        {
        const currentMonth =await page.locator("//span[@class='ui-datepicker-month']").textContent();
        const currentYear =await page.locator("//span[@class='ui-datepicker-year']").textContent();

        if(currentMonth == month && currentYear==year)
        {
            break;
        }
        await page.getByText('Next').click();
    }

    //approach 1 gathering all the data and using loop
    /*const dates = await page.$$("//a[@class='ui-state-default']");
      for(let dt of dates){
        if(await dt.textContent() == date)
        {
            await dt.click();
            break;
        }
    }*/
    //approach 2 parametising the xpath as per our requirement use `xpath along with date`
    await page.locator(`//a[@class='ui-state-default'][text()='${date}']`).click(); 

    await expect(datepicker).toHaveValue("06/30/2027");
    await page.waitForTimeout(5000);

    // Target the file input element and provide the absolute or relative path to the file
await page.locator('#singleFileInput').setInputFiles("D:/Playwright_Practice/tests/Dropdown.spec.js");
await page.waitForTimeout(5000);
})