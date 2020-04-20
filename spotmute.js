// ==UserScript==
// @name         Spotify Ad Muter
// @version      1
// @description  Mutes ads on Spotify
// @author       Matus
// @match        https://open.spotify.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // mute button is not present when the script finishes loading,
    // so we have to get it like this
    var mutebut = undefined;
    function getMutebut() {
        if (mutebut === undefined) {
            mutebut = document.getElementsByClassName("control-button volume-bar__icon")[0];
            setTimeout(function() {
                getMutebut();
            }, 500);
        }
    }

    var adtexts = ["Spotify · Spotify", "Advertisement · Spotify", "Advertisement ·"];

    var pagetitle = document.getElementsByTagName("title")[0];
    getMutebut();

    var isMuted = false; // assuming we're not initially muted
    function audioMute(action) {
        if (action) { // mute
            if (!isMuted) {
                console.log("Muting ad");
                mutebut.click();
                isMuted = true;
            }
        } else {      // unmute
            if (isMuted) {
                console.log("Ad ended, unmuting");
                mutebut.click();
                isMuted = false;
            }
        }
    }

    var pagetitleObserver = new MutationObserver(function() {
        let titleText = pagetitle.innerHTML;
        if (titleText.includes(adtexts[0]) || titleText.includes(adtexts[1]) || titleText.includes(adtexts[2])) {
            audioMute(true);
        } else {
            audioMute(false);
        }
    });

    pagetitleObserver.observe(pagetitle, {childList: true});
    console.log("Started Spotify Ad Muter");

})();
