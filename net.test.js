const { clickElement, getText } = require("./lib/commands.js");


const { expect } = require("chai");

let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.setDefaultNavigationTimeout(5000);
});

afterEach(() => {
  page.close();
});

describe("IdemVKino tests", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://qamid.tmweb.ru/client/index.php");
  });

  test("Book seat test", async () => {
    await clickElement(page, "nav.page-nav > a:nth-of-type(3)");
    await page.waitForSelector("body main section:nth-child(1) div:nth-child(1) div:nth-child(2) h2:nth-child(1)");
    await clickElement(page, "body > main:nth-child(3) > section:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1)");
    await clickElement(page, "div:nth-child(3) span:nth-child(2)");
    await clickElement(page, ".acceptin-button");
    const actual = await getText(page, ".acceptin-button");

    expect(actual).contain("Получить код бронирования");
  });

  test("Book vip seat test", async () => {
    await clickElement(page, "nav.page-nav > a:nth-of-type(3)");
    await page.waitForSelector("body > main:nth-child(3) > section:nth-child(2) > div:nth-child(1) > div:nth-child(2) > h2:nth-child(1)");
    await clickElement(page, "body > main:nth-child(3) > section:nth-child(2) > div:nth-child(3) > ul:nth-child(2) > li:nth-child(1)");
    await clickElement(page, "div:nth-child(10) span:nth-child(1)");
    await clickElement(page, ".acceptin-button");
    const actual = await getText(page, ".acceptin-button");

    expect(actual).contain("Получить код бронирования");
  });

  test.only("Book disable seat test", async () => {
    await clickElement(page, "nav.page-nav > a:nth-of-type(3)");
    await page.waitForSelector("body > main:nth-child(3) > section:nth-child(3) > div:nth-child(1) > div:nth-child(2) > h2:nth-child(1)");
    await clickElement(page, "body > main:nth-child(3) > section:nth-child(3) > div:nth-child(4) > ul:nth-child(2) > li:nth-child(1)");
    await clickElement(page, "div:nth-child(10) span:nth-child(1)");
    await page.waitForSelector(".acceptin-button");
    const actual = await getText(page, ".acceptin-button");
    //const is_disabled = await page.$('.acceptin-button[disabled]') !== null;
    const expected = await page.$eval('.acceptin-button', (button) => {
      return button.disabled;
    });

    expect(actual).contain(expected);
  });


});

 