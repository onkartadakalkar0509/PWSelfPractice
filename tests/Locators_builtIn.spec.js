import {test, expect} from '@playwright/test';

test('builtinLocators Practice', async({page})=>{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
// const logo = page.getByAltText("company-branding"); // use of get by Alternate Text
// await expect(logo).toBeVisible();
await page.getByPlaceholder("Username").fill('Admin');
await page.getByPlaceholder("Password").fill('admin123');
await page.getByRole('button', {type: 'submit'}).click();
await expect(page.getByText('Time at Work', {exact: 'true'})).toBeVisible();
}
)