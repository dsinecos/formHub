module.exports = function(app) {
    app.get('/', require('./homepage.js'));
    app.post('/v1/:email', require('./submitForm.js'));
}