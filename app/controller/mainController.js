var io = require('socket.io');
var http = require('http');

exports.getHome = function (req, res) {
	res.render('index', { title: 'Express' });
};

exports.postData = function (req, res) {
	var dataToPost 	= JSON.stringify(req.body);
	var headers = { 'Content-Type': 'application/json',
					'Content-Length': dataToPost.length};
	var options = {	host: 'localhost',
					port: 4000,
					path: '/getdata',
					method: 'POST',
					headers: headers };

	var sendReq = http.request(options, function (response) {
		response.setEncoding('utf-8');
		var responseString = '';
		response.on('data', function(data) {
			console.log("Return success message from 4000" + data);
			responseString += data;
		});
		response.on('end', function() {
			var resultObject = JSON.parse(responseString);
			res.json(resultObject);
		});
	});
	sendReq.write(dataToPost);
	sendReq.end();
};

exports.getData = function (req, res) {
	console.log("Receved from 4000 : " + req.body.id);
	res.json(req.body);
};