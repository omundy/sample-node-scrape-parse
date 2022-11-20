/**
 * 	This demo uses a file for the test, then parses HTML with Cheerio
 */

// import modules
var fs = require('fs');
const cheerio = require('cheerio');

// saved search results inside file to make tests faster
var filename = "scraped-pages/owenmundy.com.html";

// read the test file
fs.readFile(filename, 'utf8', function(err, text) {
	if (err) console.error(err); // exit early if errors

	const $ = cheerio.load(text);
	// console.log('title', $('title').text());

	// get all the titles
	let titleArr = $("span.work_thumb_title").each(function() {
			console.log("🍕", $(this).text());
	});


});
