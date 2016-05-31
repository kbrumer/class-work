const dbURI = process.env.MONGO_URI || 'mongodb://localhost/pets'; 
require( './lib/mongoose-connect' )( dbURI );

const app = require( './lib/app' );
const port = process.env.PORT || 3000;
const http = require( 'http' );

const server = http.createServer( app ).listen( port );

server.on( 'listening', () => console.log( 'server listening:', server.address() ) );
server.on( 'error', err => console.error( `server error: ${err}` ) );