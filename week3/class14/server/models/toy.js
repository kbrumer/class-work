const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const Toy = new Schema({
	name: { type: String, required: true },
	pet: {
		type: Schema.Types.ObjectId,
		ref: 'Pet'
	}
});

module.exports = mongoose.model( 'Toy', Toy );