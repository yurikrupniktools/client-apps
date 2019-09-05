const puppeteer = require('puppeteer'); // eslint-disable-line
const path = require('path');
const fs = require('fs');
const assert = require('assert');

const {
    describe, test, beforeAll, afterAll
} = global;
// jest.setup.js
jest.setTimeout(30000);

async function load(page, href) {
    await page.goto(href);
    await page.screenshot({
        path: path.resolve(__dirname, 'screens', `${href.split('/')
            .pop()}.png`)
    });
}

async function stepThru(page, hrefs) {
    for (let href of hrefs) { // eslint-disable-line
        await load(page, href); // eslint-disable-line
    }
}

describe('App', () => {
    let browser;
    let page;
    beforeAll(async () => {
        browser = await puppeteer.launch({
            // headless: false
        });

        page = await browser.newPage();
    });

    afterAll(async () => {
        await browser.close();
    });

    test('links', async () => {
        await fs.mkdir('e2e/screens', { recursive: true }, () => {
        });
        const response = await page.goto('0.0.0.0:9000');
        assert(response.ok());
        // await page.goto('http://localhost:9001/');
        const hrefs = await page.$$eval('a', as => as.map(a => a.href));
        await stepThru(page, hrefs);
    });
});
