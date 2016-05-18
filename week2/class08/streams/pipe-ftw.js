const fs = require( 'fs' );
const reverse = require( './reverse' );
const split = require( 'split' );

const file = fs.createReadStream( 'file1.txt', { encoding: 'utf-8' } );
const toFile = fs.createWriteStream( 'reverse.txt', { encoding: 'utf-8' } );

file
	.pipe( split() )
	.pipe( reverse() )
	.pipe( toFile );
