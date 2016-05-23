const express = require( 'express' );
const app = express();
const http = require( 'http' );


app.get( '/*', ( req, res ) => {
	res.send( 'first handler' );
});

app.get( '/foo', ( req, res ) => {
	res.send( 'foo handler' );
});

app.get( '/', ( req, res ) => {
	res.send( 'hello world' );
});

app.post( '/', ( req, res ) => {
	var data = '';
	req.on( 'data', chunk => data += chunk );
	req.on( 'end', () => {
		const body = data; //JSON.parse( data );
		console.log( 'req data', body );
		res.type( 'json' );
		res.send( body );
	});
});

http.createServer( app ).listen( 8080 );