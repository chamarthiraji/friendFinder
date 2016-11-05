var path = require('path');

module.exports = function(app){
	//here we are routing paths to html
	app.get('/survey', function (req, res) {
		res.sendFile(path.join(__dirname + './../public/survey.html'));
	});
	//if we don't give any path we will direct to home.html	
	app.use(function(req, res) {
	    res.sendFile(path.join(__dirname + './../public/home.html'));
	});
	

}