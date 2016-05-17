const http = require( 'http' );
const fs = require( 'fs' );

module.exports = http.createServer( (req, res) => {
	if ( req.method === 'GET' ) {
		fs.createReadStream( 'index.html' ).pipe( res );
	}
	else if ( req.method === 'POST' ) {
		req.pipe( fs.createWriteStream( 'posts.txt' ) );
		res.end( 'received' );
	}
	else {
		res.statusCode = 400;
		res.end( 'bad http verb' );
	}
});