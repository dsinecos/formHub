require('dotenv').config();

var api_key = process.env.MAILGUN_API_KEY;
var domain = process.env.MAILGUN_DOMAIN;
var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });

module.exports = function (mailTo, mailFrom, mailSubject, mailBody) {

    var mailOptions = {
        from: mailFrom,
        to: mailTo,
        subject: mailSubject,
        text: mailBody
    }

    var sendMailPromise = new Promise(function (resolve, reject) {

        mailgun.messages().send(mailOptions, function (error, body) {
            if (error !== undefined) {
                
                reject(error);
            } else {

                if(body.message === 'Queued. Thank you.') {
                    resolve("Message queued");
                }                
            }
        });

    });

    return sendMailPromise;

}