'use strict';


var path = require('path');
var nodemailer = require('nodemailer');

/**
 * Send our single page app
 */
exports.contact = function(req, res) {
    res.render('contacts');
};

exports.sendEmail = function(req, res) {
    var mailOpts, smtpTrans;

    // create reusable transporter object using SMTP transport
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'orcocacchio@gmail.com',
            pass: 'Alessandro98'
        }
    });

    // NB! No need to recreate the transporter object. You can use
    // the same transporter object for all e-mails

    // setup e-mail data with unicode symbols
    var mailOptions = {
        to: 'orcocacchio@gmail.com',
        subject: 'From ' + req.body.name + ' <' + req.body.email + '> - ' + req.body.subject,
        text: req.body.message
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            res.status(200).json({
                hasError: true
            });
        } else {
            res.status(200).json({
                hasError: false
            });
        }
    });
};