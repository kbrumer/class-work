
const users = {
	'sekrit': {
		name: 'marty'
	},
	'sheep': {
		name: 'Yvonne'
	}
};

module.exports = function( /*authSecret = 'sekrit'*/ ) {

	return function isAuthed( req, res, next ){
		
		// if( req.get('Authorization') === authSecret ) {
		const user = users[ req.get('Authorization') ];
		if(  user ) {
			req.user = user;
			next();
		}
		else {
			next({
				code: 403,
				error: 'Not Authorized'
			});
		}
	};	
};
