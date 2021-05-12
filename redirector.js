// ==UserScript==
// @name         SH redirect
// @namespace    https://github.com/S-Flavius/SH-Redirector
// @version      1.0
// @description  Redirect button to SH guides from TSA
// @author       Rederdex
// @match        https://truesteamachievements.com/game/*/achievements
// @updateURL    https://github.com/S-Flavius/SH-Redirector/edit/main/redirector.js
// @downloadURL  https://github.com/S-Flavius/SH-Redirector/edit/main/redirector.js
// @grant        none
// ==/UserScript==

(function() {
    var button = document.createElement("button");
    button.innerHTML = "Steam Hunters";

    var place = document.querySelector("#frm > div.page.tsa > div.main.middle > aside > section.navy.gameinfo > article");
    place.appendChild(button);

    var appid = document.querySelector("#frm > div.page.tsa > div.main.middle > aside > section.navy.gameinfo > article > dl > dd:nth-child(18) > a").text;
    appid = appid.substring(0, appid.length-1);

    var shLink = "https://steamhunters.com/stats/" + appid + "/guides/add";
    button.addEventListener("click", function(){
        window.open(shLink);
    });
})();
