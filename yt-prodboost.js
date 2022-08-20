// ==UserScript==
// @name         YouTube Productivity Booster
// @version      7
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

    document.getElementById("buttons").addEventListener("click", () => {home.style = ""});
}

function hideRelated() {
    if ( ! document.location.pathname.includes("/watch")) {
        return;
    }

    let panel = document.getElementById("related");
    panel.style = "display: none";

    document.getElementById("buttons").addEventListener("click", () => {panel.style = ""});
}

unsafeWindow.addEventListener("yt-navigate-finish", function() {
    hideHome();
    hideRelated();
});

console.log("Started YouTube Productivity Booster");
