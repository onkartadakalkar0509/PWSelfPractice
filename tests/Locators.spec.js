import {test, expect} from '@playwright/test'
test('locators', async({page})=>{
    await page.goto("https://www.demoblaze.com/index.html");
    await page.getByRole('link', {name: 'Log in'}).click();
    await page.locator("#loginusername").fill("pavanol");
    await page.locator('#loginpassword').fill("test@123");
    await page.click("//button[normalize-space()='Log in']");
    const logoutcta = page.locator("await page.getByRole('link', { name:'Log out'})");
    await expect(logoutcta).toBeVisible();
})