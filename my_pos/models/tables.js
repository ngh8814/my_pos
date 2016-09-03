/**
 * TABLES
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var tableSchema = new Schema({
	no: Number,
	use_yn: String,
	position_x: Number,
	position_y: Number,
	reg_datetime: {type:Date}
});
module.exports = mongoose.model('table', tableSchema);