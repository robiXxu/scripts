// ==UserScript==
// @name         spam contact tuttowp.it
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  fuck that motherfucker from tuttowp.it
// @author       robixxu
// @match        https://tuttowp.it/contattaci/
// @grant        none
// ==/UserScript==

var randshit = function () {
    return  Math.random().toString(36).substr(2, 9);
};
(function() {
    'use strict';

    jQuery('#et_pb_contact_name_1').val(randshit());
    jQuery('#et_pb_contact_email_1').val('madalin@tuttowp.it');
    jQuery('#et_pb_contact_message_1').val('SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER SCAMMER');
    jQuery('.input.et_pb_contact_captcha').val(eval(jQuery('.et_pb_contact_captcha_question').text()));

    jQuery('.et_pb_contact_submit.et_pb_button').click();
    setTimeout(() => {
        window.location = 'https://tuttowp.it/contattaci/';
    },3000);


})();