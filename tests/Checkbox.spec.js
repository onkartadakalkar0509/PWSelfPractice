import {test ,expect } from '@playwright/test';
test('Checkbox validation', async({page})=> {
    await page.goto("https://demoqa.com/checkbox");
    await page.locator(".rc-tree-switcher.rc-tree-switcher_close").click();
    await page.getByRole('checkbox', { name: 'Select Desktop' }).click();
    await page.getByRole('checkbox', { name: 'Select Home' }).click();
    await expect(await page.locator('#result:visible')).toContainText('home');

    //await expect(page.getByText('desktop', { exact: true })).toContainText('top');
})