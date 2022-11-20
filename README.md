
# Intro to web scraping with Node


## About

Scraping generally involves the following process.

1. **Scraping** - Request the text of an html page over the network.
	- Cannot be done from a client (browser) because [CORS policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS), so we will use Node.js
2. **Parsing** - Use code to identify the text you need in the string returned from the scrape.
3. **Crawling** - (optionally) Your program follows links inside each page and repeat steps 1 & 2.



---

## Instructions

1. Once you have [Node/NPM installed](https://omundy.github.io/learn-javascript/topics/node/slides.html)...
1. Clone this repository to your computer
1. `cd` into the project with the command line and ...

```bash
# Install the package dependencies
npm install
# Run the script
node scrape-basic.js
```
^ You will see the contents of google.com output to the command line if everything is working.


---

## Scraping static web pages

Scraping is simply fetching the text of the remote resource.

- A simple example `scrape-basic.js`
- This example saves the contents of a scraped file for testing `scrape-save-file.js`


## Scraping dynamic web pages

With many websites being dynamicallyally-rendered on the front end (Angular, React, Vue.js, etc.), a [parsing library](https://stackoverflow.com/questions/7372972/how-do-i-parse-a-html-page-with-node-js) will be needed to run a headless browser, execute the JS, and get the actual html.

Puppeteer examples

1. `scrape-puppeteer-save.js` uses [Puppeteer](https://pptr.dev/) to run the  code at angular.io. (compare the two angular.io examples inside `./scraped-pages` to see the difference)
2. Some websites institute stategies for preventing scraping. See these articles for more:
- [The Guide To Ethical Scraping Of Dynamic Websites With Node.js And Puppeteer](https://www.smashingmagazine.com/2021/03/ethical-scraping-dynamic-websites-nodejs-puppeteer/)
- [Scraping Google Search Results](https://www.theparsedweb.com/google-search-scraper/)



---

## Parsing using RegExp

Parsing using Regular Expressions (RegExp) generally works well for simple tasks on *static sites*. One consideration is that if the html structure of the page changes then the regular expression will break. Examples:

- `parse-test-file.js` uses RegExp to look for patterns inside test files
- `scrape-parse.js` uses RegExp to look for patterns inside a page fetched from a live website


## Parsing using Cheerio

- [Cheerio.js](https://cheerio.js.org/) is an HTML parser that uses jquery's `$` to select elements in the DOM.
- Basic example: `parse-test-file-cheerio.js`
- Scrape + parsing example: `scrape-puppeteer-cheerio.js`
