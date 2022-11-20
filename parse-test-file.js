/**
 * 	This demo uses a file for the test, then searches for strings with REGEX
 */

// import modules
var fs = require('fs');

// saved search results inside file to make tests faster
var filename = "scraped-pages/owenmundy.com.html";

// read the test file
fs.readFile(filename, 'utf8', function(err, text) {
	if (err) console.error(err); // exit early if errors

	// matchAll returns all matches + capture groups inside the parentheses
	let titleArr = [...text.matchAll(new RegExp('<span class="work_thumb_title">(.*)</span>', 'gmi'))];

	// loop through the object returned
	for (let i = 0; i < titleArr.length; i++) {
		// log just the capture groups
		console.log("🍕", titleArr[i][1]);
	}
});
