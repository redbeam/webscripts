// ==UserScript==
// @name         YouTube Playlist Loader
// @version      4
// @description  Automatically loads whole playlists on YouTube
// @author       Matus
// @match        *://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log("Starting YouTube Playlist Loader");

    var interval = setInterval(function() {
        if (document.location.pathname == "/playlist" && document.getElementsByClassName("pl-header-title").length > 0) {
            try {
                document.getElementsByClassName("load-more-text")[0].click();
            } catch (err) {
                clearInterval(interval);
                window.scrollTo(0, document.body.scrollHeight);
                console.log("Playlist loaded");
            }
        }
    }, 500);

})();
