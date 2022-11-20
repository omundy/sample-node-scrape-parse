/**
 *	Scrape a page and do a simple parse of the contents
 */

// import filesystem module
let fs = require("fs");
// import fetch module
let fetch = require("node-fetch");
// url to scrape
let url = "https://www.google.com/search?q=cats";
// string to search
let pattern = new RegExp("cat", 'gi'); // The constructor lets us use variables
// let pattern = /cat/gi; // ...unlike the literal regex
// More on regex: https://www.w3schools.com/jsref/jsref_obj_regexp.asp

fetch(url)
	.then(response => {
		if (!response.ok) throw new Error("There was an error getting response");
		// pass the text from the response to the next then()
		console.log('1. Response received');
		return response.text();
	})
	.then(text => {
		console.log('2. Text returned');
		// use regular expressions
		let resultsArr = [...text.matchAll(pattern)].map(a => a.index);
		console.log(`3. "${pattern}" was found (${resultsArr.length} times:`, resultsArr);
	})
	.catch(err => console.error(err));
