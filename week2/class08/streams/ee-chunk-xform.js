const fs = require( 'fs' );

const file = fs.createReadStream( 'file1.txt', { encoding: 'utf-8' } );

const toFile = fs.createWriteStream( 'reverse.txt', { encoding: 'utf-8' } );

String.prototype.reverse = function() {
	return this.split('').reverse().join('');
};

file.on( 'data', chunk => {
	const lines = chunk.split( '\n' );
	const reversed = lines.map( line => line.reverse() );
	toFile.write( reversed.join( '\n' ) );
});

file.on( 'end', () => {
	toFile.close();
});
