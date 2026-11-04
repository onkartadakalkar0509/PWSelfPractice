import {test, expect } from '@playwright/test';
test('iFrame', async({page})=>{
    await page.goto("https://practice-automation.com/iframes/");
    const topFrame = page.locator('iframe').first().contentFrame();
    const mainHeading = topFrame.getByRole('heading', { level: 1 });
    await expect(mainHeading).toHaveText("Playwright enables reliable web automation for testing, scripting, and AI agents.");
})

test('iFrame handling', async({page})=>{
    await page.goto("https://demo.automationtesting.in/Frames.html");
    const frameElement = page.locator("#singleframe").contentFrame();
    const textBox =  frameElement.locator("//input[@type='text']");
    await textBox.fill("Found it!!!");
    await page.waitForTimeout(2000);
    await expect(textBox).toHaveValue('Found it!!!');
})

test.only('iFrame Practise', async({page})=>{
    await page.goto("https://vinothqaacademy.com/iframe/", {waitUntil:'domcontentloaded'});
    const firstElement = page.locator("//iframe[@name='employeetable']").contentFrame();
    const checkbox = firstElement.locator('#nameInput');
    await checkbox.fill("There you are");
    await page.waitForTimeout(2000);
    const prDetails = firstElement.locator("//h2[text()='Project Details']");
    await expect.soft(prDetails).toHaveText('Project Details');

})