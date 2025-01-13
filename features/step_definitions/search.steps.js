const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
const { clickElement, getText } = require("../../lib/commands.js");

Before(async function () {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given("user is on {string} page", async function (string) {
  return await this.page.goto(`https://qamid.tmweb.ru${string}`, {
    setTimeout: 20000,
  });
});

When('user click by dayThree', async function () {
  
  return await clickElement(this.page, "nav.page-nav > a:nth-of-type(3)");
});

When('user click by Stalker', async function () {
  await this.page.waitForSelector("body main section:nth-child(1) div:nth-child(1) div:nth-child(2) h2:nth-child(1)");
  return await clickElement(this.page, "body > main:nth-child(3) > section:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1)");
});

When('user click by seatone', async function () {
  
  return await clickElement(this.page, "div:nth-child(3) span:nth-child(2)");
});

When('user click by button', async function () {
 
  return await clickElement(this.page, ".acceptin-button");
});

Then('user sees button {string}', async function (string) {
  const actual = await getText(this.page, ".acceptin-button");
  const expected = await string;
  expect(actual).contain(expected);
  
});

When('user click by Vedmak', async function () {
  await this.page.waitForSelector("body > main:nth-child(3) > section:nth-child(2) > div:nth-child(1) > div:nth-child(2) > h2:nth-child(1)");
  return await clickElement(this.page, "body > main:nth-child(3) > section:nth-child(2) > div:nth-child(3) > ul:nth-child(2) > li:nth-child(1)");
});

When('user click by seattwo', async function () {
  
  return await clickElement(this.page, "div:nth-child(10) span:nth-child(1)");
});

When('user click by MickeyMouse', async function () {
  await this.page.waitForSelector("body > main:nth-child(3) > section:nth-child(3) > div:nth-child(1) > div:nth-child(2) > h2:nth-child(1)");
  return await clickElement(this.page, "body > main:nth-child(3) > section:nth-child(3) > div:nth-child(4) > ul:nth-child(2) > li:nth-child(1)");
});

When('user click by seatthree', async function () {
  
  return await clickElement(this.page, "div:nth-child(6) span:nth-child(9)");
});

Then('user can not click button', async function () {
  const expected = await this.page.$eval('.acceptin-button', (button) => {
        return button.disabled;
      });
  
      expect(expected).eq(true);
  
});









When("user search by {string}", async function (string) {
  return await putText(this.page, "input", string);
});

Then("user sees the course suggested {string}", async function (string) {
  const actual = await getText(this.page, "a[data-name]");
  const expected = await string;
  expect(actual).contains(expected);
});
