/**
 * Settings
 */
var Tables = require('../../models/tables.js');

//Settings Menu
exports.settings = function(req, res){
	res.render('settings/settings');
};

//settings table view
exports.tableView = function(req, res){
	Tables.find({}).exec(function(err, data){
		if(err){
			return console.log("Data Error : ", err);
		} else {
			res.render('settings/table/view', {list: data});
		}
	});
};

//settings table insert
exports.tableInsert = function(req, res){
	var tableData = {
		no: req.body.no,
		use_yn: 'N',
		position_x: 0,
		position_y: 0,
		reg_datetime: new Date()
	};
	Tables.create(tableData, function(err, post){
		if(err){
			return res.json({success: false, message:err});
		} else {
			console.log(post);
			res.json({success:true, data:post});
		}
	});
};