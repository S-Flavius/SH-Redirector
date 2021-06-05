// ==UserScript==
// @name         SH redirect
// @namespace    https://github.com/S-Flavius/SH-Redirector
// @version      1.2
// @description  Redirect button to SH guides from TSA
// @author       Rederdex
// @match        https://truesteamachievements.com/game/*/achievements*
// @updateURL    https://github.com/S-Flavius/SH-Redirector/raw/main/redirector.meta.js
// @downloadURL  https://github.com/S-Flavius/SH-Redirector/raw/main/redirector.user.js
// @grant        none
// ==/UserScript==

(function addTSAbuttons() {
    var shButton = document.createElement("button");
    shButton.innerHTML = "Steam Hunters";

    var astatsButton = document.createElement("button");
    astatsButton.innerHTML = "AStats";

    var place = document.querySelector("#frm > div.page.tsa > div.main.middle > aside > section.navy.gameinfo > article");
    place.appendChild(shButton);
    place.appendChild(astatsButton);

    var appidString = document.querySelector("#frm > div.page.tsa > div.main.middle > aside > section.navy.gameinfo > article > dl > dd:last-child > a").text;
    var appid = "";
    for (var i = 0; i < appidString.length; i++) {
        if (!appidString[i].match(/[a-z]/i)) {
            appid += appidString[i];
        }
    }

    var shLink = "https://steamhunters.com/stats/" + appid + "/guides/add";
    shButton.addEventListener("click", function() { 
        window.open(shLink);           
    });

    var astatsLink = "https://astats.astats.nl/astats/Steam_Game_Info.php?AppID=" + appid;
    astatsButton.addEventListener("click", function() {
        window.open(astatsLink);
    });
})();
