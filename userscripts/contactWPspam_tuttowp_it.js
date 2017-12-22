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




// ==UserScript==
// @name         spam contact tuttowp.it - ristorante
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  fuck that motherfucker from tuttowp.it
// @author       robixxu
// @match        https://www.ristoratoretop.com/contatti/
// @grant        none
// ==/UserScript==

var randshit = function () {
    return  Math.random().toString(36).substr(2, 9);
};

(function() {
    'use strict';

    jQuery('input[name=firstname]').val(randshit());
    jQuery('input[name=lastname]').val(randshit());
    jQuery('div._form-content > div._form_element._field1._full_width > div > input[type="text"]').val(randshit()); //nome restauranto
    jQuery('div._form-content > div._form_element._field2._full_width > div > input[type="text"]').val(randshit()); //provincia
    jQuery('input[name=phone]').val("0039" + Math.floor(Math.random() * 10000000000));
    jQuery('input[name=email]').val(randshit() + "@" + randshit() + ".it");
    jQuery('div._form-content > div._form_element._field3._full_width > div > textarea').val("Madalin è un truffatore.Io o lavorato con Dan Ichim su quello modulo dì gravity forms per lasciare recensioni a mangiare di un sito web restaurante. Io con dan o mandato modulo archivio e lui a cancellato amicizia e non risponde mai. Non abbiamo pagati ancora per quello modulo.O lavorato per lui ma lui era intermedio di un altro cliente che c’è restaurante.");
    jQuery('#_form_23_submit').click();

    setTimeout(() => {
        window.location = 'https://www.ristoratoretop.com/contatti/';
    },2500);

})();