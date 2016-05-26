const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const User = new Schema({
	name: { type: String, required: true },
	pets: [{
		type: Schema.Types.ObjectId,
		ref: 'Pet'
	}]
});

module.exports = mongoose.model( 'User', User );