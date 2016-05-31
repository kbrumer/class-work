const router = require( 'express' ).Router();
const jsonParser = require( 'body-parser' ).json();
const User = require( '../models/user' );

router.post('/signup', jsonParser, ( req, res ) => {
	const password = req.body.password;

});

router.get('/signin', jsonParser, ( req, res ) => {
	const { username, password } = req.body;
	req.body = null;
	
});

module.exports = router;