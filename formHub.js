var express = require('express');
var bodyparser = require('body-parser');

require('dotenv').config();

var app = express();

var PORT = 2348;
app.listen(PORT);

var api_key = process.env.MAILGUN_API_KEY;
var domain = process.env.MAILGUN_DOMAIN;

var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });

app.use(bodyparser.urlencoded({ extended: true }));

app.get('/form', function (req, res) {
    res.send("The get route is working");
    console.log(req.body);
})

app.post('/v1/:email', function (req, res) {

    var sendTo = req.params.email;

    for (iterate in req.body) {
        console.log("fieldName : " + iterate);
        console.log("inputData : " + req.body[iterate]);
    }

    res.write("This is the body of the request");
    res.write(JSON.stringify(req.body, null, "  "));
    res.end();

    var data = {
        from: 'testingFormHub <me@mydomain.com>',
        to: sendTo,
        subject: 'Hoasofosafoasofasofoasfdoasd',
        text: JSON.stringify(req.body, null, "  ")
    };

    mailgun.messages().send(data, function (error, body) {
        console.log(body);
    });
});
