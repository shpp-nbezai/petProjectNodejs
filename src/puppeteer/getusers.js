/* eslint-disable class-methods-use-this */
const puppeteer = require('puppeteer');
const mongoose = require('mongoose');

// const browser = await puppeteer.launch({ headless: false });
// const page = await browser.newPage();
// await page.setViewport({
//     width: 1440,
//     height: 960,
//     deviceScaleFactor: 1,
// });
// const userEmails = await page.evaluate(() => {
//     const elements = document.querySelectorAll('.user-email');

//     return Array.from(elements).map((item) => item.textContent);
// });


class PageParser {
    getUsers(URL, selector) {
        console.log(selector);
        (async function() {
            console.log(selector);
            const browser = await puppeteer.launch({ headless: false });
            const page = await browser.newPage();
            await page.goto(URL);
            await page.setViewport({
                width: 1440,
                height: 960,
                deviceScaleFactor: 1,
            });
            const userEmails = await page.evaluate(() => {
                const elements = document.querySelectorAll(selector);

                return Array.from(elements).map((item) => item.textContent);
            });
            console.log(userEmails);
            await browser.close();
        }());
    }

    getDbConnection() {
        const MONGODB_URI = 'mongodb://localhost:27017/';
        const MONGODB_DB_MAIN = 'users_db';
        const MONGO_URI = `${MONGODB_URI}${MONGODB_DB_MAIN}`;

        const connectOptions = {
            // automatically try to reconnect when it loses connection
            autoReconnect: true,
            // reconnect every reconnectInterval milliseconds
            // for reconnectTries times
            reconnectTries: Number.MAX_VALUE,
            reconnectInterval: 1000,
            // flag to allow users to fall back to the old
            // parser if they find a bug in the new parse
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        return mongoose.createConnection(MONGO_URI, connectOptions);
    }
}

const myParser = new PageParser();
myParser.getUsers('http://127.0.0.1:3000/v1/users', '.user-email');
