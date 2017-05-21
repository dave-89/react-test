var express = require('express');
var app = express();
var path = require('path');


app.use(express.static('public'));


var port = (process.env.PORT || 5000);

app.listen(port, function () {
	console.log("Listening at port: ", port);
});