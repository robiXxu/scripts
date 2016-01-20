
// http://www.steamgifts.com/ajax.php
// POST

// xsrf_token:5eca2ce2668891364b3089f1a539fc4c
// do:entry_insert
// code:bYFjD

// document.getElementsByClassName('giveaway__heading__name');

// document.getElementsByClassName('giveaway__heading__name')[0].href

var formData = {
	xsrf_token: '',
	code: '',
	do:'entry_insert',
};

$.get(document.getElementsByClassName('giveaway__heading__name')[1].href,function(data){
	var form = data.substring(data.indexOf('<input type="hidden" name="xsrf_token" value="'),data.indexOf('<div data-do="entry_insert"'));
	var oldform = form;
	var xsrf_token =  form.substring(form.indexOf('value="'),form.indexOf('" />'));
	formData.xsrf_token = xsrf_token.replace('value="',"");
	var code =  oldform.substring(oldform.indexOf('name="code" value="'));
	formData.code = code.replace('name="code" value="','').replace('" />','');
	console.log(formData.xsrf_token);
	console.log(formData.code);
});
var baseUrl = '/giveaway/'+formData.code+'/bit-blaster-xl';
checkTimezone('Europe/Helsinki', formData.xsrf_token);


$.post('http://www.steamgifts.com/ajax.php' , {
	xsrf_token:formData.xsrf_token, 
	do:formData.do,
	code:formData.code
}).done(function( data ) {
    console.log(data);
 });




<input type="hidden" name="xsrf_token" value="5eca2ce2668891364b3089f1a539fc4c">
<input type="hidden" name="code" value="3Ky4Z">
