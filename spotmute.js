// ==UserScript==
// @name         Spotify Ad Muter
// @version      3
// @description  Mutes ads on Spotify
// @author       redbeam
// @match        https://open.spotify.com/*
// @grant        none
// ==/UserScript==

"use strict";

var adtexts = [
    "Spotify · Spotify",
    "Advertisement · Spotify",
    "Advertisement ·"
];

var mutebutXpath = "/html/body/div[4]/div/div[2]/div[2]/footer/div/div[3]/div/div[3]/button";
var pageTitle = document.getElementsByTagName("title")[0];
var isMuted = false; // assuming the audio is not initially muted

function setMute(muteButton, state) {
    if (state) {
        if (!isMuted) {
            muteButton.click();
            isMuted = true;
        }
    } else {
        if (isMuted) {
            muteButton.click();
            isMuted = false;
        }
    }
}

var pageTitleObserver = new MutationObserver(function() {
    let mutebut = document.evaluate(mutebutXpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    if (adtexts.some(adtext => pageTitle.innerHTML.includes(adtext))) {
        setMute(mutebut, true);
    } else {
        setMute(mutebut, false);
    }
});
pageTitleObserver.observe(pageTitle, {childList: true});

console.log("Started Spotify Ad Muter");
