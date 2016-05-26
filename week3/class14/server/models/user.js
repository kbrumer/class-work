const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const Pet = require( './pet' ).schema;

const User = new Schema({
	name: { type: String, required: true },
	pets: [ Pet ]
});

module.exports = mongoose.model( 'User', User );