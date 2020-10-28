// ==UserScript==
// @name         YouTube Productivity Booster
// @version      5
// @description  Hides suggested videos on YouTube's front page and video pages
// @author       Matus
// @match        *://www.youtube.com/*
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

function hideHome() {
    let home = document.getElementById("primary");

    home.style = "display: none";

    document.getElementById("buttons").addEventListener("click", function() {
        home.style = "";
    });
}

function hideVideos() {
    let panel = document.getElementById("watch7-sidebar-contents");
    let panelOrig = panel.innerHTML;

    panel.innerHTML = "<a id='panelUnhide'>Odporúčané videá skryté; Kliknite pre odkrytie</a>";

    document.getElementById("panelUnhide").addEventListener("click", function() {
        panel.innerHTML = panelOrig;
    });
}

console.log("Starting YouTube Productivity Booster");

// old listener: "spfdone"
unsafeWindow.addEventListener("DOMContentLoaded", function() {
    if (document.location.pathname == "/") {
        hideHome();
    } else if (document.location.pathname.includes("/watch")) {
        hideVideos();
    }
});
