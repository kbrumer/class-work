const fs = require( 'fs' );
const path = require( 'path' );

fs.readFile( '../class03/foo.txt', ( err, file ) => {
	console.log( err, file );	
});

// function getData( t, cb ) {
// 	setTimeout( function() {
// 		if ( t < 100 ) {
// 			throw new Error('omg sky is falling');
// 		}
// 		cb('hi');		
// 	}, t );
// }

// getData( 10, result => {
// 	console.log( '10', result );
// });

// getData( 100, result => {
// 	console.log( '100', result );
// });
