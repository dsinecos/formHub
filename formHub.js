var express = require('express');
var bodyparser = require('body-parser');

var app = express();

var PORT =  2348;
app.listen(PORT);

app.use(bodyparser.urlencoded({ extended: true }));

app.get('/form', function(req, res) {
    res.send("The get route is working");
})

app.post('/form', function(req, res) {
    //console.log("This is the body of the request");
    //console.log(req.body);

    for (iterate in req.body) {
        console.log("fieldName : " + iterate);
        console.log("inputData : " + req.body[iterate]);
    }
    res.write("This is the body of the request");
    res.write(JSON.stringify(req.body, null, "  "));
    res.end();
})