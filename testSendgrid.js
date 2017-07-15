require('dotenv').config();

var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
var request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: {
        personalizations: [
            {
                to: [
                    {
                        email: 'gabdugandu@gmail.com'
                    }
                ],
                subject: 'Sending with SendGrid is Fun'
            }
        ],
        from: {
            email: 'gabdugandu@gmail.com'
        },
        content: [
            {
                type: 'text/plain',
                value: 'and easy to do anywhere, even with Node.js'
            }
        ]
    }
});


sg.API(request)
    .then(function (response) {
        console.log(response.statusCode);
        console.log(response.body);
        console.log(response.headers);
    })
    .catch(function (error) {
        console.log(error.response.statusCode);
    });