var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.status(200).send("The bot is currently functional!");
});

app.post('/bot/message/', function(req, res) {
    console.log(req.body);

    if (req.body.user_id === 'USLACKBOT') {
        res.status(200).send();
        return;
    }

    if (req.body.token !== 'HVvyRaVDBBWBG7y8NmgxRWac') {
        res.status(401).send();
        return;
    }

    if (req.body.user_name !== 'blegh') {
        var data = {
            'text': 'Hey, you are not allowed to speak here!'
        };
        console.log('Username not an admin!');
        res.status(200).send(data);
        return;
    }

    res.status(200).send();
});

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(400).send(err.message);
});

app.listen(port, function() {
    console.log('Slack block bot listening on port ' + port);
});