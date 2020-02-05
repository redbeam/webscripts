// ==UserScript==
// @name         Bitcoinity.org Title Unspoiler
// @version      1
// @description  Masks the bitcoin price in the webpage title
// @author       Matus
// @match        http://bitcoinity.org/markets/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setInterval(function() {
        document.getElementsByTagName("title")[0].innerHTML = "Bitcoinity.org";
    }, 1);

})();
