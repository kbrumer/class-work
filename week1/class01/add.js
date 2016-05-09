var assert = require( 'assert' );

function add( x = 0, y = 0 ) {
	return x + y;
}

describe( 'adding', () => {
	
	it( 'adds simple numbers', () => {
		assert.equal( add( 1, 2 ), 3 );
	});

	it( 'treats missing values as 0', () => {
		assert.equal( add( 2 ), 2 );
	});
});
