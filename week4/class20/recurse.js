function recursion( input, max ){
	console.log( 'before', input );
	
	if ( input < max ) {
		console.log( recursion( input + 1, max ) );
	}
	
	return 'after' + input;
}

console.log( recursion(0, 3) );