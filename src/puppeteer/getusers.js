const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setViewport({
        width: 1440,
        height: 960,
        deviceScaleFactor: 1,
    });
    await page.goto('http://127.0.0.1:3000/v1/users');

    const userEmails = await page.evaluate(() => {
        const elements = document.querySelectorAll('.user-email');

        return Array.from(elements).map((item) => item.textContent);
    });

    console.log(userEmails);
    await browser.close();
})();
