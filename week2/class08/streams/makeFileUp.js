const fs = require( 'fs' );
const superheroes = require( 'superheroes' );

const file = fs.createWriteStream( 'file1.txt', { encoding: 'utf-8' } );

for( var i = 0; i < 100; i++ ) {
	file.write( `One of my favorites is ${superheroes.random()}\n` );
}

// file.close();