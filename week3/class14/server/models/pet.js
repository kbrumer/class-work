const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const petSchema = new Schema({
	name: { 
		type: String, 
		required: true 
	},
	type: { 
		type: String, 
		default: 'bird' 
	},
	owner: {
		required: true,
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
});

const petModel = mongoose.model( 'Pet', petSchema );

module.exports = petModel;
