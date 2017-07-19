var sendMail = require('../middleware/sendMail.js');

module.exports = function (req, res, next) {

    var mailTo = req.params.email;

    // Checking to ensure there is a single email id (with an @ and . included) in the param
    if(mailTo.indexOf('@') === mailTo.lastIndexOf('@') && mailTo.indexOf('@') !== -1 && mailTo.indexOf('.') !== -1) {
        console.log("Email param accepted");
    } else {
        console.log("Email param not accepted");
    }

    var redirectOnSubmission = "";

    for (iterate in req.body) {
        if(iterate === "redirectOnSubmission") {
            redirectOnSubmission = req.body[iterate]
        }
        console.log("fieldName : " + iterate);
        console.log("inputData : " + req.body[iterate]);
    }

    //var mailTo = req.params.email;
    var mailFrom = 'testingFormHub <me@mydomain.com>';
    var mailSubject = "testing while refactoring code";
    var mailBody = JSON.stringify(req.body, null, "  ");

    sendMail(mailTo, mailFrom, mailSubject, mailBody).then(function (data) {
        console.log(data);

        res.redirect(redirectOnSubmission);
        
        /*
        res.status(202).write("This is the body of the request");
        res.write(JSON.stringify(req.body, null, "  "));
        res.end();
        */

    }).catch(function (error) {
        console.log(error);
        
        res.status(500).write("Error");
        res.end();
    });

}