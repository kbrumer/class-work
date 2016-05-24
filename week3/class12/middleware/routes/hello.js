const router = require( 'express' ).Router();

router.get( '/foo', ( req, res ) => {
	res.send( { message: 'hiyya foo' } );	
});

router.get( '/bar', ( req, res ) => {
	res.send( { message: 'hiyya bar' } );	
});

router.get( '/world', ( req, res ) => {
	res.send( { message: 'hiyya world' } );	
});

module.exports = router;
