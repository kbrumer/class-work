var arr = [ 1, 2, 3 ];

console.log( 'item not in array index:', arr.indexOf( 4 ) );

function remove( item ) {
	const index arr.indexOf( item );
	if ( index !== -1 ) {
		arr.splice( index, 1 );
	}
	
}

console.log( arr );