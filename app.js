var express = require('express');
var app = express();

var http = require('http').Server(app);

app.use('/js',express.static('js'));
app.use('/views',express.static('views'));

app.route('/').get(
    function (req,res) {
        res.sendFile(_dirname + '/index.html');
    });
    
app.route('/restapi/:username').get(
    function (req,res) {
        var user_name = req.params.username;
        res.send("Hi" + user_name);
    });