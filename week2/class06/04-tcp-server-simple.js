const net = require( 'net' );
const fs = require( 'fs' );

const log = fs.createWriteStream( 'server-log.txt' );

// const server = new net.Server();
// server.on( 'connection', socket => {
// 	// same as below
// });

var i = 1;

const server = net.createServer( socket => {
	const name = `socket${i++}`;
	console.log( `${name} connected` );
	
	socket.write( `hello ${name}!\n` );
	
	socket.on( 'close', () => {
		console.log( `${name} disconnected` );
	});
	
	socket.on( 'data', chunk => {
		log.write( `${name}: ${chunk.toString()}\n` );
	});
	
	socket.pipe( process.stdout );
});


server.listen( 65000, () => {
	address = server.address();
	console.log('opened server on %j', address);
});