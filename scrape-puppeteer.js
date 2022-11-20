/**
 *	Scrape a page and log it to the console
 */

// // import filesystem module
// let fetch = require("node-fetch");
// // url to scrape
// let url = "https://www.google.com/search?q=cats";
//
//
// fetch(url)
// 	.then(response => {
// 		if (!response.ok) throw new Error("There was an error getting response");
// 		// pass the text from the response to the next then()
// 		console.log('1. Response received');
// 		return response.text();
// 	})
// 	.then(text => {
// 		console.log('2. Text returned', text);
// 	})
// 	.catch(err => console.error(err));




const puppeteer = require('puppeteer');
const fs = require('fs').promises;

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://angular.io/');
    const html = await page.content();
    await fs.writeFile("scraped-pages/angular.io.html", html);
    await browser.close();
})();
