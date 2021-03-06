const router = require( 'express' ).Router();
const bodyParser = require( 'body-parser' ).json();
const User = require( '../models/user' );

router
	.post( '/:userId/roles/:role', ( req, res ) => {
		User.findById( req.params.userId )
			.then( user => {
				if ( !user ){
					throw new Error( 'no user by that id' );
				}
				
				const role = req.params.role;
				if ( user.roles.indexOf( role ) !== -1 ) {
					return user;
				}
				else {
					user.roles.push( role );
					return user.save();
				}
			})
			.then( user => {
				res.json({
					id: user.id,
					roles: user.roles
				});
			})
			.catch( err => {
				res.status(500).json({
					msg: 'user role add fail',
					error: err
				});
			});
	});
	
	
module.exports = router;