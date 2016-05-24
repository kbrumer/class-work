const express = require( 'express' );
const app = express();
// const morgan = require('morgan');
// app.use( morgan( 'dev' ) );
const isAuthed = require( './lib/isAuthed' );

app.use( ( req, res, next ) => {
	console.log( `${req.method}: ${req.url} (${new Date()})` );
	next();
});

app.use( isAuthed( 'sekrit' ) );

app.get( '/foo', ( req, res ) => {
	res.send( 'heelo world' );	
});


app.use( ( req, res ) => {
	const text = `Cannot find ${req.method} ${req.url}`;
	res.status( 404 ).send( text );
});

module.exports = app;