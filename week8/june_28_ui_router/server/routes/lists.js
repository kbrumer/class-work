const router = require( 'express' ).Router();
const jsonBody = require( 'body-parser' ).json();
const List = require( '../models/List' );
const items = require( './items' );

router
	.get( '/', ( req, res, next ) => {
		List.find()
			.then( lists => res.send( lists ) )
			.catch( next );
	})
	.get( '/:id', ( req, res, next ) => {
		List.findById( req.params.id )
			.then( list => res.send( list ) )
			.catch( next );
	})
	.post( '/', jsonBody, ( req, res, next ) => {
		new List( req.body ).save()
			.then( list => res.send( list ) )
			.catch( next );
	})
	.delete( '/:id', ( req, res, next ) => {
		List.findByIdAndRemove( req.params.id )
			.then( list => res.send( list ) )
			.catch( next );
	});

router.use( '/:id/items', ( req, res, next ) => {
	req.listId = req.params.id;
	List.findById( req.listId ).count()
		.then( count => {
			if ( count !== 1 ) throw `list ${req.listId} does not exist!`;
			next();
		})
		.catch( next );
}, items );

module.exports = router;