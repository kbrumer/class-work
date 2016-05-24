
module.exports = function( authSecret = 'sekrit' ) {

	return function isAuthed( req, res, next ){
		
		if( req.get('Authorization') === authSecret ) {
			next();
		}
		else {
			res.status( 403 ).send( 'go away!' );
		}
	};	
};
