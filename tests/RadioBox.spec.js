import {test, expect} from '@playwright/test';

test ('Radio Box Validation', async({page})=>{
    await page.goto("https://demoqa.com/automation-practice-form");
    const maleRadio =  page.getByLabel('Male', { exact: true });
    await maleRadio.check({ force: true });
    await expect(maleRadio).toBeChecked();
    
})