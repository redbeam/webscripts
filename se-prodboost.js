// ==UserScript==
// @name         StackExchange Productivity Booster
// @namespace    http://tampermonkey.net/
// @version      1
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

console.log("Starting StackExchange Productivity Booster");

var hot = document.getElementById("hot-network-questions");
var hotOrig = hot.innerHTML;

hot.innerHTML = "<a id=\"hotUnhide\">Hot Questions hidden; Click to unhide</a>";

document.getElementById("hotUnhide").addEventListener("click", function() {
    hot.innerHTML = hotOrig;
});

/*var skript = document.createElement('script');
skript.type = 'text/javascript';
skript.textContent = '\n\
var hot = document.getElementById("hot-network-questions");\n\
var hotOrig = hot.innerHTML;\n\
\n\
hot.innerHTML = "<a onclick=\\"hot.innerHTML = hotOrig\\">Hot Questions hidden; Click to unhide</a>";\n\
';
document.getElementsByTagName("head")[0].appendChild(skript);*/
