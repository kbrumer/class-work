const tokenChecker = require( './token' );

module.exports = function ensureAuth( req, res, next ) {
	const token = req.headers.token || req.query.token;

	//TODO: make query work
		
	if ( !token ) {
		return res.status(403).json({
			error: 'no token provided'
		});
	}
	
	tokenChecker.verify( token )
		.then( payload => {
			req.user = payload;
			next();
		})
		.catch( () => {
			res.status(403).json({
				error: 'invalid token'
			});
		});
	
};