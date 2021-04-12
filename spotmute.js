// ==UserScript==
// @name         Spotify Ad Muter
// @version      2
// @description  Mutes ads on Spotify
// @author       Matus
// @match        https://open.spotify.com/*
// @grant        none
// ==/UserScript==

'use strict';

var adtexts = [
    "Spotify · Spotify",
    "Advertisement · Spotify",
    "Advertisement ·"
];

var mutebutXpath = "/html/body/div[4]/div/div[2]/div[2]/footer/div/div[3]/div/div[3]/button";
var pageTitle = document.getElementsByTagName("title")[0];
var mutebut = undefined;
var isMuted = false; // assuming we're not initially muted

function muteAudio(doMute) {
    if (doMute) {
        if (!isMuted) {
            mutebut.click();
            isMuted = true;
        }
    } else {
        if (isMuted) {
            mutebut.click();
            isMuted = false;
        }
    }
}

var pageTitleObserver = new MutationObserver(function() {
    mutebut = document.evaluate(mutebutXpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    if (adtexts.some(adtext => pageTitle.innerHTML.includes(adtext))) {
        muteAudio(true);
    } else {
        muteAudio(false);
    }
});

pageTitleObserver.observe(pageTitle, {childList: true});
console.log("Started Spotify Ad Muter");
