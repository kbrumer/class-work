const fs = require( 'fs' );

var bmp = 'palette-bitmap.bmp';
var txt = 'ipsum.txt';

fs.readFile( bmp, ( err, buffer ) => {
	
	const bitmap = new Bitmap( buffer );
	// console.log( buffer.readInt32LE(10) );
	console.log( bitmap.offset );
});

function Bitmap ( buffer ) {
	this.offset = buffer.readInt32LE(10);
}

