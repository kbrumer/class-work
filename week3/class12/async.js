const fs = require( 'fs' );

function myAsync( data, callback ) {
	
	fs.readdir( 'bad', ( err, files ) => {
		// don't throw
		if( err ) return callback( err );
		// don't allow execution to continue (unless you want it to)!
		
		const names = files.map( ( f, i ) => `${i+1}: f` );
		callback( null, names );
	});
}

myAsync( 'foo', ( err, files ) => {
	if( err ) console.error( err );
	// else console.log( files );
});




const sander = require( 'sander' );

function myAsyncPromise( dir ) {
	
	return sander.readdir( dir )
		.then( files => {
			return files.map( ( f, i ) => `${i}: f` );
		})
		.catch( err => {
			return Promise.reject( err );
		});
}

myAsyncPromise( 'bad' )
	.then( files => {
		console.log( files );
	})
	.catch( err => {
		console.error( 'the error was:', err );
	});