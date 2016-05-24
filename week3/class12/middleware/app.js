const express = require( 'express' );
const app = express();
// const morgan = require('morgan');
// app.use( morgan( 'dev' ) );
const isAuthed = require( './lib/isAuthed' );

app.use( ( req, res, next ) => {
	console.log( `${req.method}: ${req.url} (${new Date()})` );
	next();
});


app.get( '/login', ( req, res ) => {
	if ( req.query.user === 'marty' ) {
		res.send( { token: 'sekrit' } );
	}
	else {
		res.status( 403 ).send({ fail: 'user not found' } );
	}
});

// app.use( isAuthed( 'sekrit' ) );

const authed = isAuthed( 'sekrit' );

const hello = require( './routes/hello' );
const pets = require( './routes/pets' );

app.get( '/api/greetings/foo', ( req, res, next ) => {
	if ( req.query.magic ) {
		next();
	}
	else {
		next( 'route' );
	}
}, ( req, res ) => {
	res.send( { magic: 'magic' } );
});

app.use( '/api/greetings', hello );
app.use( '/api/pets', authed, pets );

app.use( ( req, res ) => {
	const text = `Cannot find ${req.method} ${req.url}`;
	res.status( 404 ).send( text );
});

app.use( ( err, req, res, next ) => {
	res
		.status( err.code || 500 )
		.send( err.error || 'Unknown error' );
});

module.exports = app;