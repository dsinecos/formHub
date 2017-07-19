require('dotenv').config();

var api_key = process.env.MAILGUN_API_KEY;
var domain = process.env.MAILGUN_DOMAIN;

var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

var data = {
    from: 'testingMailgun<me@mydomain.com>',
    to: 'gabduganesh@gmail.com',
    subject: 'Bhola Bhola Bhola',
    text: 'Does this work, will it work, or will it not work?'
};

mailgun.messages().send(data, function (error, body) {
    console.log(body);
});