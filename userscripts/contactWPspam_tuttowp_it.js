// ==UserScript==
// @name         spam contact tuttowp.it
// @namespace    robiXxu
// @version      0.1
// @description  fuck with that motherfucker scammer from tuttowpß.it
// @author       robiXxu
// @match        https://tuttowp.it/contattaci/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // fetch actual names from a italian name generator / db
    // get some message template propositions.. that look like actual requests
    jQuery('#et_pb_contact_name_1').val('SCAMMER');
    jQuery('#et_pb_contact_email_1').val('madalin@tuttowp.it');
    jQuery('#et_pb_contact_message_1').val('SCAMMER');
    jQuery('.input.et_pb_contact_captcha').val(eval(jQuery('.et_pb_contact_captcha_question').text()));

    jQuery('.et_pb_contact_submit.et_pb_button').click();
    setTimeout(() => {
        window.location = 'https://tuttowp.it/contattaci/';
    },3000);
})();