const http = require( 'http' );
const fs = require( 'fs' );

const server = http.createServer( ( req, res ) => {
	console.log( 'request:', req.method, req.url );
	
	if ( req.url === '/' || req.url === '/index.html' ) {
		res.writeHead( 200, { "Content-Type": "text/html" } );
		fs.createReadStream( 'index.html' ).pipe( res );
	}
	else {
		res.writeHead( 200, { "Content-Type": "text/plain" } );
		res.end( 'hello world' );
	}
});


server.listen( 4444, () => {
	console.log('opened server on %j', server.address());
});