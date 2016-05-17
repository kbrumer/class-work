const server = require( '../server' );
const assert = require( 'chai' ).assert;
const net = require('net');

const port = 65000;

describe( 'not so chatty tcp server', () => {
	
	before( done => {
		server.listen( port, done );
	});
	
	describe( 'client chatting', () => {
		
		var client;
		
		before( done => {
			client = net.connect( { port }, done );
		});
		
		it( 'says hello when client connects', done => {
			client.once( 'data', message => {
				assert.equal( message, 'hello' );
				done();
			});
		});
		
		it( 'echos client', done => {
			client.once( 'data', message => {
				assert.equal( message, 'foo' );
				done();
			});
			
			client.write( 'foo' );
		});
		
		after( done => {
			client.on( 'close', done );
			client.end();
		});
	});
	
	
	
	after( done => {
		server.close( done );
	});
});