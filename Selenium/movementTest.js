//Test test
const {Builder, By, Key, util} = require ("selenium-webdriver");

async function openPage(){
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("file:///C:/Users/Owner/Documents/GitHub/C.H.E.S.S--Game/html/index.html");
}
openPage();

