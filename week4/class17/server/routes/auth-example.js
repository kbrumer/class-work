const router = require( 'express' ).Router();
const jsonParser = require( 'body-parser' ).json();
const User = require( '../models/user' );

router.post('/signup', jsonParser, ( req, res ) => {
	const password = req.body.password;
	req.body.password = null;

	if ( !password ) return res.status(500).json({msg: 'you probably don\'t want a blank password'});

	var newUser = new User(req.body);
	newUser.generateHash(password);
	
	newUser.save()
		.then( user => {
			// TODO (XXX) send a jwt on successful user creation
			res.json( { msg: 'user created!', userId: user.id } );
		})
		.catch( err => {
			res.status( 500 ).json( { msg: 'could not create user', err } );
		});

});

router.get('/signin', jsonParser, ( req, res ) => {
	const { username, password } = req.body;
	req.body = null;
	
	User.findOne({ username })
		.then( user => {
			if ( !user ) {
				return res.status(500).json({ 
					msg: 'authentication seyz no!',
					// don't normally reveal why
					reason: `no user ${username}` 
				});
			}

			if ( !user.compareHash( password ) ) {
				
				return res.status(500).json({
					msg: 'authentication seys no!',
					// don't normally reveal why
					reason: 'bad password'
				});
			}
			// generate a token
			res.json({ 
				msg: 'authentication seys yes!',
				token: user.id 
			});
		})
		.catch( err => {
			res.status(500).json({ 
				msg: 'authentication seyz no!',
				reason: err 
			});
		});
});

module.exports = router;