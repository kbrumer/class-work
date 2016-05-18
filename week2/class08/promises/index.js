const getFile = require( './getFile' );


// getFile( 'file12.txt' ).then( null, err => {
// 	console.log( 'ERROR!', err );
// });

// getFile( 'file1.txt' ).then( file => {
// 	console.log( file.toString() );
// }, null );

/* result of .then is new promise */
// var promise = getFile( 'file1.txt' );
// console.log( promise );
// promise = promise.then( file => {});
// console.log( promise );

/* promise then caches value, can be called multiple times */
// const promise = getFile( 'file1.txt' );

// promise.then( file => {
// 	console.log( file.toString() );
// });
	
// promise.then( data => {
// 	console.log( 'how did i get here?', data );
// });

getFile( 'file1.txt' )
	.then( file => {
		console.log( 'first file results: ', file.toString() );
		return 'ha!';
	})
	.then( data => {
		console.log( 'value results from previous then:', data );
		return getFile( 'file2.txt' );
	})
	.then( data => {
		console.log( 'second file results:', data );
	})
	.catch( err => {
		console.log( 'ERROR!', err );
	});
	
