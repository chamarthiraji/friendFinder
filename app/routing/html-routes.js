var path = require('path');

module.exports = function(app){
		// viewed at http://localhost:8080.otther than /survey it uses home.html
	app.use(function(req, res) {
	    res.sendFile(path.join(__dirname + '../public/home.html'));
	});
	app.get('/survey', function(req, res) {
	    res.sendFile(path.join(__dirname + '../public/survey.html'));
	});


}