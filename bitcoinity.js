// ==UserScript==
// @name         Bitcoinity.org Title Unspoiler
// @version      2
// @description  Masks the Bitcoin price in the webpage title
// @author       Matus
// @match        http://bitcoinity.org/markets/*
// @grant        none
// ==/UserScript==

'use strict';

window.Markets.set_title = function() {
    return document.title = "Bitcoinity.org";
}
window.Markets.set_title();
