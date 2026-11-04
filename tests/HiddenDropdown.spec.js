import {test , expect } from '@playwright/test';
test('HiddenDropdown', async({page})=>{
    page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', {name : 'Login' }).click();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await page.getByRole('link', {name : 'PIM'}).click();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
    await page.locator("//div[7]//div[1]//div[2]//div[1]//div[1]//div[1]").click();
    await page.waitForTimeout(2000);
    const options = await page.$$("//div[@role='option']//span");
    for(let option of options){
        const value = await option.textContent();  
        if(value.includes('Finance')){
            await option.click()
            break;
        }      
    }
    await page.waitForTimeout(2000);
    await page.locator("//span[@class='oxd-userdropdown-tab']").click();
    await page.getByRole('menuitem', { name :' Logout' }).click();
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
})