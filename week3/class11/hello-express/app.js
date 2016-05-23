const express = require( 'express' );
const app = express();
const http = require( 'http' );
const fs = require( 'fs' );

const pets = [
	{ id: 1, type: 'cat', name: 'sylvia' },
	{ id: 2, type: 'dog', name: 'boris' },
	{ id: 3, type: 'cat', name: 'buttons' }
];

app.use( ( req, res, next ) => {
	const possibleFile = __dirname + '/public' + req.url;
	console.log( possibleFile );
	fs.stat( possibleFile, ( err, stats) => {
		if( err ) next();
		else res.sendFile( possibleFile );
	});
});

app.get( '/pets', ( req, res ) => {
	res.send( pets );
});


http.createServer( app ).listen( 8080 );