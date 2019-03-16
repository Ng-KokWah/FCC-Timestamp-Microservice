//START of the cloned repo: https://github.com/freeCodeCamp/boilerplate-project-timestamp/
// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// listen for requests :)
var listener = app.listen(50023, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
//END of codes from the cloned repo: https://github.com/freeCodeCamp/boilerplate-project-timestamp/


//the actual method to do the conversion
app.get("/api/timestamp/:date_string", function (req, res) {
	
	if(/^[1-2][0-9]{3}[\-][0-1][0-9][\-][0-3][0-9]/.test(req.params.date_string) == true) {
		var date = new Date(req.params.date_string);
		res.json({unix: date.getTime(), utc: date.toUTCString()});
	}
	else if(/^[0-9]{10}/.test(req.params.date_string) == true){
		var date = new Date(req.params.date_string * 1000);
		res.json({unix: date.getTime(), utc: date.toUTCString()});
	}
	else {
		res.json({error: "Invalid Date"});
	}
});

app.get("/api/timestamp/", function (req, res) {
	var date = new Date();
	res.json({unix: date.getTime(), utc: date.toUTCString()});
});