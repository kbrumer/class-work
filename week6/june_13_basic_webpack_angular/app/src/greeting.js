const cool = require( 'cool-ascii-faces' );

module.exports = function( place = 'world' ) {
	return `yo ${place} ${cool()}`;
};