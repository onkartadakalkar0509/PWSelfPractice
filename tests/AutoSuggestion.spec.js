import {test,  expect} from '@playwright/test'
test('Auto Suggest Dropdown', async({page})=>{
    await page.goto("https://www.zingbus.com//");
    await page.locator("//input[@list='suggestions1']").fill('Pune');
    const options = page.locator("//div[@id='suggestions1']//ul/li");
    await options.first().waitFor();
    const fromCityOptions = await options.all()
    //const fromCityOptions = await page.$$("//div[@id='suggestions1']//ul");
    for(let option of fromCityOptions)
        {
            const value = await option.textContent();
            //console.log(value);
            if(value.includes('Talegaon Toll Plazza'))
                {
                await option.click();
                break;
            }
        }
    await page.locator("//input[@list='suggestions2']").fill('Mumbai');
    const destination = page.locator("//div[@id='suggestions2']//ul/li");
    await destination.first().waitFor();
    const toCityOptions = await destination.all();
    for (let dest of toCityOptions){
        const cities = await dest.textContent();
        if(cities.includes('Navi Mumbai, Mumbai, Maharashtra')){
            await dest.click();
            break;
        }
    }
    await page.locator("//span[@class='formshome_textSearch__U73WY']").click();
    await page.waitForTimeout(2000);
})