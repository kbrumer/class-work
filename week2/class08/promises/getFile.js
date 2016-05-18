const fs = require( 'fs' );

module.exports = function getFile( name, cb ) {
	const promise = new Promise( ( resolve, reject ) => {

		fs.readFile( name, { encoding: 'utf-8' }, ( err, file ) => {
			if( err ) {
				reject( err );
				if ( cb ) cb( err );
			}
			else {
				resolve( file );
				if ( cb ) cb( null, file );	
			} 
		});
		
	});
	
	return promise;
};