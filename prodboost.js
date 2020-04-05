// ==UserScript==
// @name         YouTube Productivity Booster
// @namespace    http://tampermonkey.net/
// @version      2
// @description  Hides suggested videos on YouTube
// @author       Matus
// @match        *://www.youtube.com/*
// @grant        unsafeWindow
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

// OLD VERSION
/*var skript = document.createElement('script');
skript.type = 'text/javascript';
skript.textContent = '\n\
var odporucane;\n\
var odporucaneOrigContent;\n\
\n\
function hideOdporucane() {\n\
    odporucane = document.getElementsByClassName("section-list")[0] || document.getElementById("watch7-sidebar-modules");\n\
    odporucaneOrigContent = odporucane.innerHTML;\n\
    \n\
    odporucane.innerHTML = "<a onclick=\\"odporucane.innerHTML = odporucaneOrigContent;\\">Odporúčané videá skryté; Kliknite pre odkrytie</a>";\n\
}\n\
';
document.getElementsByTagName("head")[0].appendChild(skript);*/
