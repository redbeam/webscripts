// ==UserScript==
// @name         YouTube Productivity Booster
// @version      6
// @description  Hides suggested videos on YouTube's front page and video pages
// @author       redbeam
// @match        https://www.youtube.com/*
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

"use strict";

function hideHome() {
    if (document.location.pathname != "/") {
        return;
    }

    let home = document.getElementById("primary");
    home.style = "display: none";

    document.getElementById("buttons").addEventListener("click", function() {
        home.style = "";
    });
}

function hideRelated() {
    if ( ! document.location.pathname.includes("/watch")) {
        return;
    }

    let panel = document.getElementById("related");
    panel.style = "display: none";

    document.getElementById("buttons").addEventListener("click", function() {
        panel.style = "";
    });
}

unsafeWindow.addEventListener("DOMContentLoaded", function() {
    hideHome();
    hideRelated();
});

console.log("Started YouTube Productivity Booster");
