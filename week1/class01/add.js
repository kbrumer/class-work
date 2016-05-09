
function add( x, y ) {
	return x + y;
}


function testIt( actual, expected ) {
	var passed = expected === actual;
	
	if ( passed ) {
		console.log( 'passed!' );
	}
	else {
		console.log( 'failed:', actual, 'did not equal', expected );
	}
	
}


var expected = 3;
var actual = add( 1, 2 );

testIt( actual, expected );

expected = 2;
actual = add( 2 );

testIt( actual, expected );