
/*
 * GET home page.
 */
var Data = require('../models/data.js');

exports.index = function(req, res){
	Data.find({}, function(err, data){
		if(err){
			return console.log("Data Error : ", err);
		} else {
			console.log("Search Data is : ", data);
		}
	});
	res.render('main/login', { title: 'Express' });
};