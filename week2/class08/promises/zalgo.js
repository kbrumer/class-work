var cache;
function getBigThing( cb ){
	if ( !cache ) {
		console.log('read')
		fs.readFile( 'file1.txt', ( err, data ) => {
			cache = data;
			cb ( null, data );
		});
	}
	else {
		console.log('cache')
		cb( null, cache );
	}
}

console.log( 'before first "async" call' );
getBigThing( data => {
	console.log( 'response 1' );
});
console.log( 'after first "async" call' );

setTimeout( () => {
	console.log( 'before second "async" call' );
	getBigThing( data => {
		console.log( 'response 2' );
	});

	console.log( 'after second "async" call' );
}, 1000 );