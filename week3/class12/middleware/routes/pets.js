const router = require( 'express' ).Router();

router
	.get( '/', ( req, res ) => {
		const pet = { 
			name: 'garfield',
			owner: req.user
		};
		res.send( pet );	
	})
	.post( '/', ( req, res ) => {
		res.send( { message: 'post pets' } );	
	})
	.delete( '/', ( req, res ) => {
		res.send( { message: 'del pets' } );	
	});

module.exports = router;
