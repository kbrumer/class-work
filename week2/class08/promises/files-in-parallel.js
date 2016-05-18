const sander = require( 'sander' );

sander.readdir( 'dir' )
	.then( files => files.map( f => 'dir/' + f ) )
	.then( paths => paths.map( p => sander.readFile( p, { encoding: 'utf-8' } ) ) )
	.then( filePromises => Promise.all( filePromises ) )
	.then( contents => contents.map( c => c.toUpperCase() ) )
	.then( contents => console.log( 'contents', contents ) )
	.catch( err => console.log( err ) );

