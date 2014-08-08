'use strict';

var index = require('./controllers/index');
var contacts = require('./controllers/contacts');

module.exports = function(app){
    
    app.get('/contacts', contacts.contact);
    
    app.get('/*', index.index);
    
    app.post('/contacts/sendEmail', contacts.sendEmail);
    
};