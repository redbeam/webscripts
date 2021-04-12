// ==UserScript==
// @name         StackExchange Productivity Booster
// @version      3
// @description  Hides Top Questions on StackExchange sites.
// @author       Matus
// @match        *://*.stackexchange.com/*
// @match        *://stackoverflow.com/*
// @match        *://*.stackoverflow.com/*
// @match        *://serverfault.com/*
// @match        *://superuser.com/*
// @match        *://askubuntu.com/*
// @match        *://stackapps.com/*
// @match        *://mathoverflow.net/*
// @grant        none
// ==/UserScript==

"use strict";

var hot = document.getElementById("hot-network-questions");
var hotOrig = hot.innerHTML;

hot.innerHTML = '<a id="hotUnhide">Hot Questions hidden; Click to unhide</a>';

document.getElementById("hotUnhide").addEventListener("click", function() {
    hot.innerHTML = hotOrig;
});

console.log("Started StackExchange Productivity Booster");
