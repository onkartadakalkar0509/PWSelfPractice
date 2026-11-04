import {test, expect} from "@playwright/test"
test("Validation of web table", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const table = page.locator("#productTable");
    const columns = table.locator('thead tr th');
    const rows =  table.locator('tbody tr');
    //console.log(await columns.count());
    //console.log(await rows.count());
    expect (await columns.count()).toBe(4);
    expect(await rows.count()).toBe(5);

    //to select the option need to use the .filter option in playwright
//    const matchedRow = rows.filter({
//         has: page.locator('td'),  //pass the locator where the value is stored
//         hasText: 'Wireless ' // pass the name of the Product
//     })

   // await matchedRow.locator('input').check();
    await page.waitForTimeout(5000);

    async function selectProduct(rows, page, name){
        const matchedRow = rows.filter({
        has: page.locator('td'),  //pass the locator where the value is stored
        hasText: name // pass the name of the Product
    })

    await matchedRow.locator('input').check();
    }
    await selectProduct(rows,page,'Smartphone');
    await selectProduct(rows,page,'Laptop');
    await selectProduct(rows,page,'Television');
    await page.waitForTimeout(5000);
})