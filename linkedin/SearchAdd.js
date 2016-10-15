// ==UserScript==
// @name         linkedIn Search Connect
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  linkedIn Search AutoConnect
// @author       You
// @match        https://www.linkedin.com/vsearch/*
// @grant        none
// ==/UserScript==


(function() {
    'use strict';
    var nexturl = "https://www.linkedin.com/home";
    if( typeof($($('.next > *')[0]).attr('href')) !== "undefined"){
        nexturl = "https://www.linkedin.com" + $($('.next > *')[0]).attr('href');
    }
    console.log(nexturl);
    var addConnections = function(){
        var pageConnects = $('.primary-action-button');

        pageConnects = pageConnects.filter(function(i){
            return !$(pageConnects[i]).hasClass('invite-sent') && ($(pageConnects[i]).text() == "Connect");
        });

        if(pageConnects.length>0){
            $(pageConnects[0]).click();
        }else{
            clearInterval(massAddInterval);
            location.href = nexturl;

        }
    };
    var massAddInterval = setInterval(addConnections,2000);

})();
