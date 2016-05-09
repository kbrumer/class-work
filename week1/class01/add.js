
function add( x, y ) {
	return x + y;
}


function assert( name, passed ) {
	
	if ( passed ) {
		console.log( name, 'passed!' );
	}
	else {
		console.log( name, 'failed!' );//, actual, 'did not equal', expected );
	}
	
}


var expected = 3;
var actual = add( 1, 2 );

assert( 'adds simple numbers', actual === expected );

expected = 2;
actual = add( 2 );

assert( 'treats missing values as 0', actual === expected );