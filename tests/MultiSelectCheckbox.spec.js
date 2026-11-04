import {test, ecpect, expect} from '@playwright/test'
test('Assertion count', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
  await page.selectOption('#colors',['Blue', 'Yellow', 'White']); //direct option
   const options =await page.locator("#colors option");
    await expect(options).toHaveCount(7);
  // const options =await page.$$("#colors option");
  //  console.log("no. of options are " + options.length);
  // await expect(options.length).toBe(7)
  // await page.waitForTimeout(2000);
 const value =await page.locator("#colors").textContent();
 await expect(value.includes('Blue')).toBeTruthy();

})