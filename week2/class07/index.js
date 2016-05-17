const server = require( './server' );

server.listen( 65000, () => {
	console.log('opened server on %j', server.address() );
});