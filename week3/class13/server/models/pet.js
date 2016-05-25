const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

module.exports = mongoose.model( 'Pet', new Schema({
	name: { 
		type: String, 
		required: true 
	},
	type: { 
		type: String, 
		default: 'bird' }
}, { 
	timestamps: true 
}));