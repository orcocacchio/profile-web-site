'use strict';


var path = require('path');
var nodemailer = require('nodemailer');

/**
 * Send our single page app
 */
exports.contact = function(req, res) {
  res.render('contacts');
};

exports.sendEmail = function (req, res) {
    var mailOpts, smtpTrans;
    
    smtpTrans = nodemailer.createTransport('SMTP', {
      service: 'Gmail',
      auth: {
          use_authentication: true,
          user: "orcocacchio@gmail.com",
          pass: "Alessandro98" 
      }
    });
    
    mailOpts = {
      from: req.body.name + ' &lt;' + req.body.email + '&gt;',
      to: 'orcocacchio@gmail.com',
      subject: 'Website contact form',
      text: req.body.message
    };
    
    smtpTrans.sendMail(mailOpts, function (error, response) {
      if (error) {
          res.render('contacts', { title: 'Raging Flame Laboratory - Contact', msg: 'Error occured, message not sent.', err: true, page: 'contact' })
      }
      else {
          res.render('contacts', { title: 'Raging Flame Laboratory - Contact', msg: 'Message sent! Thank you.', err: false, page: 'contact' })
      }
    });
};