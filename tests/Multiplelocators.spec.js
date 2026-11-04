import {test, expect} from '@playwright/test';

test('handlingMultipleLocators', async({page})=>{
    await page.goto("https://www.demoblaze.com/index.html");
    const links = await  page.$$('a');
    for(const link of links)
    {
       const linkText = await link.textContent();
       console.log(linkText);
    }
}
)