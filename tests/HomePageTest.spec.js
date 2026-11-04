import {test,expect}  from '@playwright/test' 
test('Home Page', async({page}) => {
    await page.goto("https://www.demoblaze.com/index.html");
    const pageTitle = await page.title();
    console.log("title of the page is:" , pageTitle)
    await expect(page).toHaveTitle("STORE");
    await page.close();
})
test('homepage1', async ({page}) => {
    await page.goto("https://www.demoblaze.com/index.html");
    await expect(page).toHaveURL("https://www.demoblaze.com/index.html");
    await page.close();
})