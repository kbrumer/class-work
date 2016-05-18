const stream = require( 'stream' );

String.prototype.reverse = function() {
	return this.split('').reverse().join('');
};

var transform = {
	transform: function(chunk, encoding, next) {
		this.push( chunk.reverse() + '\n' );
		next();
	},
	flush: function(done) {
		done();
	}
};

module.exports = function makeReverse() {
	return stream.Transform( transform );
};

