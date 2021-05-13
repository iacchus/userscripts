// ==UserScript==
// @name         Google Last Year Only
// @version      1.1
// @namespace    https://github.com/iacchus/userscripts
// @description  Limit maximum date of page for Google Search
// @author       iacchus
// @match        *://www.google.com/*
// @grant        none
// @run-at document-start
// ==/UserScript==

// originally made for Firefox 88.0.1 on GNU/Linux (May 13th, 2021)

arg = "&tbs=qdr:y"; // query string to limit google to past year pages

href = window.location.href; // get url + query

if(! href.includes(arg)) { // if it still isn't the query arg added to the href
  new_href = href + arg; // then add it!
  window.location.replace(new_href); // redirect to new address
}
