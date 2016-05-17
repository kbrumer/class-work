const net = require( 'net' );
// server app logic
const server = net.createServer( socket => {
	socket.write( 'hello' );
	
	socket.pipe(socket);
	// socket.on( 'data', chunk => {
	// 	socket.write( chunk );
	// });
});

module.exports = server;