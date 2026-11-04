import {test, expect } from "@playwright/test";

test('assertionTest', async({page})=>{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await page.getByPlaceholder("Username").fill('Admin');
await page.getByPlaceholder("Password").fill('admin123');
await page.getByRole('button', {type : 'submit'}).click();
await page.getByRole('link', { name: 'Admin' }).click();
const usersText = page.getByText('System Users');
//await expect(usersText).toBeVisible();
await expect(page.getByPlaceholder("Search")).toBeEnabled(); // to Be Enabled assertion
//.toBeChecked() assertion used for radio or checkboxes if they are selected
await page.getByRole('link', { name: 'Admin' }).click();
const firstCheckboxVisual = page.locator('.oxd-table-card .oxd-checkbox-wrapper').first();
const hiddenInput = page.locator('.oxd-table-card input[type="checkbox"]').first();
await firstCheckboxVisual.click();
await expect(hiddenInput).toBeChecked();
})

test('AssertionImp', async({page})=>{
await page.goto("https://nopcommerce.com/register");
const registebtn = page.locator('#register-button');
await expect(registebtn).toHaveAttribute('name','register-button');
await expect(page.locator('.page-title h1')).toHaveText("Register");
await expect(page.locator('.page-title h1')).toContainText("ter");
})

test.only('countAsssertion Validation', async({page})=>{
await page.goto("https://the-internet.herokuapp.com/dropdown");
const options =page.locator('select[id=dropdown] option');
await expect(options).toHaveCount(3); 
})