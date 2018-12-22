var express = require('express');
var app = express();

//Uses the static files such as CSS and Javascript
app.use(express.static(__dirname));

var server = app.listen(3000, function(){
    var host = server.address().address
    var port = server.address().port

    console.log("Listening on http://%s:%s", host, port, )
})