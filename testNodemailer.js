var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
        
        user: 'gabdugandu@gmail.com' ,
        pass: '*************'
    }
}));

var mailOptions = {
    from: 'gabdugandu@gmail.com',
    to: 'gabdugandu@gmail.com',
    subject: 'Sending mail using Node.js',
    text: 'Mayday mayday'
};

transporter.sendMail(mailOptions, function(error, info) {
    if(error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});

