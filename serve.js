var express = require("express");

process.on('uncaughtException', function(err) {
	console.error(err);
});

var app = express();

app.use(express.static(__dirname));

app.listen(6630);
