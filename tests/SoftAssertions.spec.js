import {test, expect} from '@playwright/test'

test('soft assertions', async({page})=> {
    await page.goto("https://demoblaze.com/index.html");
    //Hard Assertions
    // await expect(page).toHaveTitle('STORE');
    // await expect(page).toHaveURL("https://demoblaze.com/index.html");
    // const home = page.getByRole('link', { name: 'Home (current)' });
    // await expect(home).toBeVisible();

    //Soft Assertion
    await expect(page).toHaveTitle('STORE');
    await expect.soft(page).toHaveURL("https://demoblaze.com/index.html222");
    const home = page.getByRole('link', { name: 'Home (current)' });
    await expect.soft(home).toBeVisible();
})