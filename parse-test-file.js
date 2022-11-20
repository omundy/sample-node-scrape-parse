/**
 * 	This demo uses a file for the test, then searches for strings with REGEX
 */

// we saved the search results inside a file to make regex tests faster
var filename = "scraped-pages/google.com-cats.html";

// import node's built-in FileSystem lib
var fs = require('fs');

// read the test file
fs.readFile(filename, 'utf8', function(err, text) {
	if (err) console.error(err); // exit early if errors

	// test
	// console.log("the html string =", html);

	// matchAll returns all matches + capture groups
	var titleArr = [...text.matchAll(/>(.*)<\/h3>/gim)];
	// ... but there are two matches for each url
	// var urlArr = [...text.matchAll(/"text">(.*)<span/gim)];
	let urlArr = [...text.matchAll(new RegExp('<h3([A-Za-z0-9"<\/>= ]+)<\/h3>', 'gmi'))];

	// loop through the object returned
	for (let i = 0; i < titleArr.length; i++) {
		// console.log(titleArr[i][1], "\n");
	}
	for (let i = 0; i < urlArr.length; i++) {
		console.log("🍕", urlArr[i][0], "\n");
	}

	// note, this is just an example, so further testing will be required to
	// make sure the urls match the titles ...

});
