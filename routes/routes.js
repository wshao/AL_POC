module.exports = function (app) {
	var home	= require ("../app/controller/mainController");
	app.get('/', home.getHome);
	app.post('/', home.postData);
	app.post('/getdata', home.getData);

};