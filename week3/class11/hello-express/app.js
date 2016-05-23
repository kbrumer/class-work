const express = require( 'express' );
const app = express();
const http = require( 'http' );

const pets = [
	{ id: 1, type: 'cat', name: 'sylvia' },
	{ id: 2, type: 'dog', name: 'boris' },
	{ id: 3, type: 'cat', name: 'buttons' }
];

app.use( express.static( 'public' ) );

app.get( '/pets', ( req, res ) => {
	res.send( pets );
});

http.createServer( app ).listen( 8080 );