/**
 *	Scrape a page and log it to the console
 */

// import filesystem module
let fetch = require("node-fetch");
// url to scrape
let url = "https://www.google.com/search?q=cats";


fetch(url)
	.then(response => {
		if (!response.ok) throw new Error("There was an error getting response");
		// pass the text from the response to the next then()
		console.log('1. Response received');
		return response.text();
	})
	.then(text => {
		console.log('2. Text returned', text);
	})
	.catch(err => console.error(err));
