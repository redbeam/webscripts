// ==UserScript==
// @name         YouTube Productivity Booster
// @version      4
// @description  Hides suggested videos on YouTube's front page and video pages
// @author       Matus
// @match        *://www.youtube.com/*
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

console.log("Starting YouTube Productivity Booster");

function hideOdporucane() {
    var odporucane = document.getElementsByClassName("yt-card clearfix")[0] || document.getElementById("watch7-sidebar-modules");
    var odporucaneOrig = odporucane.innerHTML;

    odporucane.innerHTML = "<a id=\"odporucaneUnhide\">Odporúčané videá skryté; Kliknite pre odkrytie</a>";

    document.getElementById("odporucaneUnhide").addEventListener("click", function() {
        odporucane.innerHTML = odporucaneOrig;
    });
}

setTimeout(function() { // first start
    if (document.location.pathname == "/" || document.location.pathname == "/watch") {
        hideOdporucane();
    }
}, 1000);

unsafeWindow.addEventListener("spfdone", function() { // after navigation
    setTimeout(function() {
        if (document.location.pathname == "/" || document.location.pathname == "/watch") {
            hideOdporucane();
        }
    }, 1000);
});
