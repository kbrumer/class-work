const getFile = require( './getFile' );

getFile( 'file1.txt', ( err, file ) => {
	if ( err ) console.log( err );
	else console.log( file.toString() );
});

getFile( 'file1.txt' ).then( file => {
	console.log( file.toString() );
}, err => {
	console.log( 'ERROR!', err );
});