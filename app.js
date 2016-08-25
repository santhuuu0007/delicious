var express = require('express');
var app = express();

var http = require('http').Server(app);

app.use('/js',express.static('js'));
app.use('/controllers',express.static('controllers'));
app.use('/css',express.static('css'));
app.use('/views',express.static('views'));
app.use('/directives',express.static('directives'));
app.use('/node_modules',express.static('node_modules'));
app.use('/images',express.static('images'));

app.route('/').get(
    function(req,res){
        //var user_name = req.query.username;
        res.sendFile(__dirname + '/index.html');
    });    
app.route('/restapi/:username').get(
    function(req,res){
        var user_name = req.params.username;
        // Get data from data base and put in array and convert this to json and res.send json
        res.send("Hi" + user_name);
    }); 


// http.listen(9001,function(){
//     console.log("Server listen at 9001");
// });

// http://jsfiddle.net/alexsuch/RLQhh/