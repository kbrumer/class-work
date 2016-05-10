const cool = require( 'cool-ascii-faces' );

module.exports = function( name ) {
	return `hi ${name}: ${cool()}`;
};