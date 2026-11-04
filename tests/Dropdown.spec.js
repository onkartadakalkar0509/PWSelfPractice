import {test, expect} from '@playwright/test';
test('dropdown check', async({page})=>{
    await page.goto("https://demoqa.com/select-menu");
    await page.getByText('Select Title', { exact: true }).click({ force: true });
    await page.getByText('Dr.', { exact: true }).click();
   // await page.waitForTimeout(5000);
})
test('dropDown by Label', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //await page.locator("#colors").selectOption({label : 'White'}); // using label
    //await page.locator("#colors").selectOption('Blue'); // using visible text
    await page.selectOption("#colors", 'Green') // one more method
    await page.waitForTimeout(5000);
})

test('dropDown By Value', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //await page.locator("#colors").selectOption({value : 'green'}); // using value
    await page.locator("#colors").selectOption({index : 5}); // using index value 
    await page.waitForTimeout(5000);
})
test.only('Assertion count', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    // const options = page.locator('#colors option');
    // await expect(options).toHaveCount(9);

    // const options =await page.$$('#colors option');
    // console.log("numbers are" + options.length)
    // await expect(option.length).toBe(7);

    // const content = await page.locator('#colors').textContent();
    // await expect(content.includes('Blue')).toBeTruthy();
 // using loop
//     const options = await page.$$('#colors option');
//     let status = false;
//      for ( const option of options ){
//         //console.log(await option.textContent());
//          let value = await option.textContent();
//          if(value.includes('Blue'))
//             {
//                 status = true;
//                 break;
//          }
// }
         //   expect(status).toBeTruthy();

    //Selecting option using loop
    const options = await page.$$('#colors option');
    for ( const option of options )
        {
            let value = await option.textContent();
            if(value.includes('Blue'))
                {
                    await page.selectOption('#colors', value);  //using this to click on selected value
                    break;
                }
                await page.waitForTimeout(5000);
}
})