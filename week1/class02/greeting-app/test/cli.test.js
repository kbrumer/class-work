var assert = require( 'assert' );
var greet = require( '../greet' );
var execSync = require('child_process').execSync;


describe( 'cli', () => {
	
	it( 'greets by name', () => {
		var greeting = execSync( 'node index.js marty', { encoding: 'utf-8' } );
		assert.equal( greeting, 'hello marty!\n' );
	});
	
	// it( 'default to "Stranger" when no name', () => {
	// 	assert.equal( greet(), 'hello stranger!' );	
	// });
});