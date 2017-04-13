var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.status(200).send('Hello world!')
});

app.post('/bot/message/', function(req, res) {
    console.log(req.body);
    res.status(200).send(req.body);
});

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(400).send(err.message);
});

app.listen(port, function() {
    console.log('Slack block bot listening on port ' + port);
});