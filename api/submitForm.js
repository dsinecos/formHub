var sendMail = require('../middleware/sendMail.js');

function isEmailValid(email) {

    // Checks that '@' appears only once and '.' appears at least once
    return (email.indexOf('@') === email.lastIndexOf('@') && email.indexOf('@') !== -1 && email.indexOf('.') !== -1);

}

module.exports = function (req, res, next) {

    var mailTo = req.params.email;

    if (isEmailValid(mailTo)) {
        console.log("Email param accepted");
    } else {
        console.log("Email param invalid");
        res.status(400).send("Invalid email");
    }

    var redirectOnSubmission = "";
    var mailBody = {};

    for (iterate in req.body) {
        if (iterate === "redirectOnSubmission") {
            redirectOnSubmission = req.body[iterate]
        } else {
            mailBody[iterate] = req.body[iterate];
            console.log(iterate + " : " + req.body[iterate]);
        }

    }

    var redirectOnSubmission = (redirectOnSubmission.startsWith("http://")) ? redirectOnSubmission : "http://" + redirectOnSubmission;

    var mailFrom = 'testingFormHub <me@mydomain.com>';
    var mailSubject = "testing while refactoring code";
    var mailBody = JSON.stringify(mailBody, null, "  ");

    sendMail(mailTo, mailFrom, mailSubject, mailBody)
        .then(function (data) {
            console.log(data);

            if (redirectOnSubmission) {
                res.redirect(redirectOnSubmission);
            } else {
                res.send(JSON.stringify(data, null, "  "));
            }

        })
        .catch(function (error) {
            console.log(error);

            res.status(502).write("Bad Gateway");
            res.end();
        });

}