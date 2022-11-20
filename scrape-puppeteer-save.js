/**
 *	Scrape a page and save it as a file - using puppeteer
 *	References:
 *	https://scrapingant.com/blog/angularjs-site-scraping-easy-deal
 */

// import modules
const puppeteer = require('puppeteer');
const fs = require('fs').promises;

// url to scrape, name of the file
// let url = "https://www.google.com/search?q=cats";
// var filename = "scraped-pages/google.com-cats-puppeteer.html";
let url = "https://angular.io/";
var filename = "scraped-pages/angular.io-puppeteer.html";

async function scrape() {
	const browser = await puppeteer.launch({
		headless: false
	});
	const page = await browser.newPage();
	await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36');
	await page.goto(url, {waitUntil: "domcontentloaded"});
	const text = await page.content();
	console.log('1. Response received');
	// await page.waitForSelector('#result-stats'); // google
	await page.waitForSelector('.text-body'); // angular
	console.log('2. Selector found');
	await fs.writeFile(filename, text);
	console.log('3. File written');
	await browser.close();
}
scrape();
