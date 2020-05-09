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

                /* skusal som opravit posuvanie videi - dali sa posuvat, ale server to neregistroval; od 12.10.2019 uz funkcne
                var plist_array = document.getElementsByClassName("pl-video yt-uix-tile");
                for (let i = 0; i < plist_array.length; i++) {
                    plist_array[i].className = "pl-video yt-uix-tile yt-uix-dragdrop-draggable-item";
                    plist_array[i].children[0].className = "pl-video-handle yt-uix-dragdrop-drag-handle";
                    plist_array[i].children[0].innerHTML = "<span class=\"pl-video-handle-img yt-sprite\"></span>";
                }
                */
            }
        }
    }, 500);

})();
