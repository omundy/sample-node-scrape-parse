
# scrape-parse


To scrape a website you need to:

1. Request the html page
	- This cannot be done from a client (your browser) because of the CORS policy
	- See the example `scrape-basic.js` in this folder. To run it:

```bash
# 1. cd to this directory in the command line
cd <your-path>/
# 2. Install the package dependencies
npm install
# 3. Run the script
node scrape-basic.js
```

2. Once you have the text you can parse the string returned
 	- You can do this with regular expressions (RegEx): `parse-test-file.js`
	- Or, use one of the many parsing libraries for node 
