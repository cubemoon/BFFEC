var URLConfig = require('./URLConfig');
var mw = require('./middleware');
var rf = require('./redisFour');
var routing = require('nap_routes');


exports.init = function(app) {
	app.use('*',function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		next();
	})
	var nap = new routing.Nap(app, URLConfig, mw);
	nap.setControllerPath('./controllers');
	nap.startListener();
	
	//redis four 路由分发
	new rf.RedisFour(app);
}
