const assert = require( 'chai' ).assert;
const getIsAuthedFn = require( '../lib/isAuthed' );

function getMockReq( secret ) {
	return { 
		get( header ) {
			if ( header !== 'Authorization' ) return;
			return secret;
		}
	};
}

describe( 'isAuthed', () => {
	
	const secret = 'sekrit';
	const isAuthed = getIsAuthedFn( secret );
	
	it( 'call next on success', () => {
		const req = getMockReq( secret );
		var nextCalled = false;
		const next = () => nextCalled = true;
		
		isAuthed( req, null, next );
		
		assert.ok( nextCalled, 'next was not called' );
	});
	
	it( 'sends 403 on failure', () => {
		const req = getMockReq( 'bad' );
		const next = () => assert.fail();
		const res = {
			status( code ) { 
				assert.equal( code, 403 ); 
				return this; 
			},
			send( msg ) { 
				assert.equal( msg, 'go away!' );
				this.sent = true; 
			}
		};
		
		isAuthed( req, res, next );
		
		assert.ok( res.sent );
	});
	
});