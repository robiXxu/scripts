====================================================================
// ==UserScript==
// @name         linkedin
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.linkedin.com/people/*
// @grant        none
// ==/UserScript==

(function(){
var i=0;
var minutes=10;
function addCon(){
  if($('.bt-request-buffed')[i]){
  	window.scrollBy(0,200);
    $('.bt-request-buffed')[i].click();
    i++;
  }else if(!$('.bt-request-buffed')[i] && i!=0){
    i=0;
  }else{
    clearInterval(massAddInterval);
      setTimeout(function(){
          location.reload();
      },minutes*60);

  }
}
var massAddInterval = setInterval(addCon,2000);

})();
====================================================================


// ==UserScript==
// @name         linkedin homepage - connect
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.linkedin.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if($('.connect').length>0){
        var i=0;
        var connectInterval = setInterval(function(){
            if($('.connect')[i]){
                $('.connect')[i].click();
            }else if($('.connect').length>0){
                i=0;
            }else{
                clearInterval(connectInterval);
            }
        },1500);
    }
})();
