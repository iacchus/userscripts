// ==UserScript==
// @name         Google Redirect to .br
// @version      1.0
// @namespace    https://github.com/iacchus/userscripts
// @description  Redirects www.google.com to www.google.com.br
// @author       iacchus
// @match        *://www.google.com/*
// @grant        none
// @run-at document-start
// ==/UserScript==

arg = ".br";

host = window.location.hostname // set hostname to 'host', ie., "www.google.com" or "www.google.com.br"

if(!host.includes(arg)) { // checks if hostname contains 'arg,' ie., ".br"
  // if not, executes this:
  path = window.location.pathname // set pathname to var 'path', ie., "/search"
  query = window.location.search // set query to var 'query', ie., "?q=my+query"

  new_host = host + arg; // adds '.br' to hostname
  new_href = new_host + path + query // recreates: "www.google.com.br" + "/search" + "?q=my+query"
  window.location.replace(new_href); // redirect to new address "www.google.com.br/search?q=my+query"
}
