const express = require( 'express' );
const app = express();

app.get( '/', ( r, res ) => {
	res.send( 'heelo world' );	
});

module.exports = app;