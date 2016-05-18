const gulp = require( 'gulp' );

gulp
	.src(['**/*.js','!node_modules/**'], { read: false })
	.on( 'data', chunk => {
		console.log( '>>', chunk );
	});