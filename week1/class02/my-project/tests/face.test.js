const assert = require( 'assert' );
const face = require( '../face' );

it( 'greets with name', () => {
	const greeting = face( 'marty');
	assert.ok( /hi marty:/.test( greeting ), `result was "${greeting}"` );	
});

it( 'greets with name', () => {
	const greeting = face( 'marty');
	assert.ok( /hi marty:/.test( greeting ), `result was "${greeting}"` );	
});