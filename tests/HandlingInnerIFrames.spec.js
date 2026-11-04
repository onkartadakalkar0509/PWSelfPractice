import {test, expect } from '@playwright/test';

test('Inner IFrame', async({page})=>{
    await page.goto("https://demo.automationtesting.in/Frames.html");
    await page.locator("//a[text()='Iframe with in an Iframe']").click();
    const nestedInput = page
        .frameLocator('iframe[src*="MultipleFrames.html"]')
        .frameLocator('iframe[src="SingleFrame.html"]')
        .getByRole('textbox');
    await nestedInput.fill("Finally");
})
test('Inner iFrame Handling', async({page})=>{
    await page.goto("https://qaautomationlabs.com/testing/iframe.php");
    const nestedclickbox = page.frameLocator("//iframe[@name='iframe1']")
    .getByRole('button', { name: 'Click me in iframe 1' });
    await nestedclickbox.click();
    await expect(page.locator("//p[@class='text-success font-weight-bold']"))
    .toHaveText('You have clicked on iframe 1 button');
})
test.only('Nested Frame Handling', async({page})=>{
    await page.goto('https://app.thetestingacademy.com/playwright/frames/multi-frames');
    const leftNav = page.frameLocator("//frame[@name='side']");
    await leftNav.locator("//a[text()='Vehicle registration']").click();
    const mainFrame = page.frameLocator("//frame[@name='main']");
    await mainFrame.getByPlaceholder('e.g. Test Automation').fill('Playwright Framework');
    await mainFrame.getByPlaceholder('Aarav Sharma').fill("Onkar T");
    await mainFrame.locator("//input[@id='RESULT_TextField-3']").fill("MH14 FM XX02");
    await mainFrame.locator("//select[@id='RESULT_RadioButton-1']").selectOption('SUV');
    await mainFrame.locator("//input[@id='RESULT_TextField-4']").fill('2016');
    await mainFrame.getByPlaceholder('Any notes about the registration').
    fill('Onkar has purchased second hand car please register');
    await mainFrame.getByRole('button' ,{ name: 'Submit registration'}).click();
    await expect(mainFrame.locator('#vehicle-output')).toBeVisible();
    await page.waitForTimeout(5000);
})