import {test, expect} from '@playwright/test';

// test.skip('test', async({page})=>{
//     page.goto();
//     page.on('dialog', async variable=>{
//         expect(variable.type()).toContain();
//         expect(variable.message()).toContain();
//         await variable.accept();
//     })
//     await page.locator().click();
//     awaitexpect().toHaveText();
// })

test('Alert Handling OK CTA', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on('dialog', async dialog=> {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert');
        await dialog.accept();
    })
    await page.click("//button[text()='Simple Alert']");
})
test('Confimation Handling OK or cancel CTA', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on('dialog', async confirm=>{
        expect(confirm.type()).toContain('confirm');
        expect(confirm.message()).toContain('Press a button!');
       // await confirm.accept();
        await confirm.dismiss();
    })
    await page.click("//button[text()='Confirmation Alert']");
    await expect(page.locator("#demo")).toHaveText('You pressed Cancel!');
})

test('Handling of Prompt Dialog Box', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on('dialog', async value=>{
        expect(value.type()).toContain('prompt');
        expect(value.message()).toContain('Please enter your name:');
        expect(value.defaultValue()).toContain('Harry Potter');
        await value.accept('John Doe');
    })
    await page.click("//button[text()='Prompt Alert']");
    await expect(page.locator('#demo')).toHaveText('Hello John Doe! How are you today?');
})

