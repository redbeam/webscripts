// ==UserScript==
// @name         YouTube Playlist Loader
// @version      2
// @description  Automatically loads whole playlists on YouTube
// @author       Matus
// @match        *://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log("Starting YouTube Playlist Loader");

    var interval = setInterval(function() {
        if (document.location.pathname == "/playlist") {
            try {
                document.getElementsByClassName("load-more-text")[0].click();
            } catch (err) {
                clearInterval(interval);
                window.scrollTo(0, document.body.scrollHeight);
            }
        }
    }, 500);

})();
