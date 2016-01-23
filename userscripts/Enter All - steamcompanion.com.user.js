// ==UserScript==
// @name         Enter All - steamcompanion.com
// @namespace    robiXxu
// @version      0.1
// @description  steamcompanion.com Enter All Script
// @author       robiXxu - Schiriac Robert
// @match        https://steamcompanion.com/gifts/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

(function(){
var links = document.getElementsByClassName('giveaway-links');
var formdataArray = [];

function formData(id) {
	this.script= 'enter';
	this.giftID=id;
	this.token='';
	this.action= 'enter_giveaway';
};
function getAllData(){
	if(links.length>0){
		for(var i =0; i<links.length;i++){
			if(document.getElementsByClassName('giveaway-links')[i].style.opacity=="0.5"){}else{
				$.get(document.getElementsByClassName('giveaway-links')[i].href,function(data){
					var giftID = data.substring(data.indexOf('name="giftID"'),data.indexOf('</form>'));
					giftID = giftID.replace('name="giftID" value="','');
					giftID = giftID.replace('" />','');
					if(giftID.trim() == ""){}else{
						var item = new formData(giftID.trim());
						formdataArray.push(item);
						console.log("Gift with ID [" + item.giftID + "] added to list");
					}
				});
			}
		}
		setTimeout(function(){
			if(formdataArray.length>0){
				createButton();	
			}
		},1500);
	}
}
function enterAll(){
	for(var i =0; i<formdataArray.length;i++){
		var item = formdataArray[i];
		$.post('https://steamcompanion.com/gifts/steamcompanion.php' , {
			script: item.script,
			giftID: item.giftID,
			token: item.token,
			action: item.action,
		}).done(function( data ) {
			console.log(item);
			console.log(data);
		 });
		if(i==formdataArray.length-1){
			document.getElementById('enterall').innerHTML = "Done";
		}
	}
}
function createButton(){
	var li = document.createElement("li");
	var link = document.createElement("a");

	link.innerHTML ="Enter All";
	link.setAttribute("id","enterall");
	link.addEventListener('click',function(){
		enterAll();
	});
	li.appendChild(link);
	document.getElementsByClassName('left')[0].appendChild(li);
}
getAllData();
})();