const app = require( '../app' );
const chai = require( 'chai' );
const chaiHttp = require( 'chai-http' );
const assert = chai.assert;

chai.use( chaiHttp );

describe( 'http server', () => {
	
	const request = chai.request( app );
	
	it( 'sends back index response', done => {
		request
			.get( '/' )
			.end( ( err, res ) => {
				assert.equal( res.statusCode, 200 );
				assert.ok( res.text );
				done();
			});
	});
});


