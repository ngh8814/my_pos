/**
 * USER
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var userSchema = new Schema({
	user_id: String,
	name: String,
	pw: String,
	reg_datetime: {type:Date},
	login_datetime: {type:Date},
	role_id: Number,
	role_name: String
});
module.exports = mongoose.model('user', userSchema);
