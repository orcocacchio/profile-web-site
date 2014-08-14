'use strict';

var index = require('./controllers/index');
var contacts = require('./controllers/contacts');
var projects = require('./controllers/projects');
var skills = require('./controllers/skills');

module.exports = function(app){
    
    app.get('/contacts', contacts.contact);
    app.get('/projects', projects.projects);
    app.get('/skills', skills.skills);
    app.get('/home', index.index);
    app.get('/', index.index);
    
    app.post('/contacts/sendEmail', contacts.sendEmail);
    
};