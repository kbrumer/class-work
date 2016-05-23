const express = require( 'express' );
const app = express();
const http = require( 'http' );

const pets = [
	{ id: 1, type: 'cat', name: 'sylvia' },
	{ id: 2, type: 'dog', name: 'boris' },
	{ id: 3, type: 'cat', name: 'buttons' }
];

app.get( '/pets', ( req, res ) => {
	res.send( pets );
});

app.get( '/users/:userId/pets/:petId/', ( req, res ) => {
	const pet = pets.find( p => p.id == req.params.id );
	if ( pet ) res.send( pet );
	else res.status( 404 ).send( `no pet with id ${req.params.id}` );
});

app.get( '/data', ( req, res ) => {
	res.send( req.query );
});


http.createServer( app ).listen( 8080 );