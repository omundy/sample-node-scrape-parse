/**
 *	Scrape a page and save it as a file
 */

// import modules
let fs = require("fs");
let fetch = require("node-fetch");

// url to scrape, name of the file
// let url = "https://www.google.com/search?q=cats";
// var filename = "scraped-pages/google.com-cats.html";
// let url = "https://owenmundy.com";
// var filename = "scraped-pages/owenmundy.com.html";
let url = "https://angular.io/";
var filename = "scraped-pages/angular.io.html";

// set headers to ensure utf8
var headers = new Headers();
headers.append('Content-Type','text/plain; charset=UTF-8');

fetch(url, headers)
	.then(response => {
		if (!response.ok) throw new Error("There was an error getting response");
		// pass the text from the response to the next then()
		console.log('1. Response received');
		return response.text();
	})
	.then(text => {
		console.log('2. Text returned');
		fs.writeFile(filename, text, function (err) {
			if (err) throw err;
			console.log('3. File saved');
		});
	})
	.catch(err => console.error(err));
