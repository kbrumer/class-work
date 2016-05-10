var assert = require( 'assert' );
var greet = require( '../greet' );

describe( 'greeter', () => {
	
	it( 'greets by name', () => {
		assert.equal( greet( 'marty' ), 'hello marty!' );	
	});
	
	it( 'default to "Stranger" when no name', () => {
		assert.equal( greet(), 'hello stranger!' );	
	});
});