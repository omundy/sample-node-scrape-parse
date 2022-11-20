/**
 *	Scrape a page and save it as a file - using puppeteer
 *	Demo from: https://scrapingant.com/blog/angularjs-site-scraping-easy-deal
 */

// import modules
const puppeteer = require('puppeteer');
const fs = require('fs').promises;
const cheerio = require('cheerio');

// url to scrape
let url = "https://angular.io/";

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);
	const text = await page.content();
	console.log('1. Response received');
	const $ = cheerio.load(text);
	console.log('2. Cheerio', $('title').text());

	// get all the sub titles
	let titleArr = $("h2").each(function() {
		console.log("🍕", $(this).text());
	});

	await browser.close();
})();
