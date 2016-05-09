var assert = require( 'assert' );
var add = require( '../add' );

describe( 'adding', () => {
	
	it( 'adds simple numbers', () => {
		assert.equal( add( 1, 2 ), 4 );
	});

	it( 'treats missing values as 0', () => {
		assert.equal( add( 2 ), 2 );
	});
});