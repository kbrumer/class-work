const router = require( 'express' ).Router();
const jsonParser = require( 'body-parser' ).json();
const User = require( '../models/user' );
const token = require( '../lib/token' );

router.post('/signup', jsonParser, ( req, res, next ) => {
	const { username, password } = req.body;
	delete req.body.password;
	
	if ( !username || !password ) return next({ code: 400, message: 'Invalid request. Username and Password required' });
	
	User.findOne({ username }).count()
		.then( count => {
			if ( count ) throw new Error({ code: 400, message: 'username already exists' });
			
			const user = new User( req.body );
			user.generateHash( password );
			return user.save();
		})
		.then( user => token.sign( user ) )
		.then( token => res.json({ token }) )
		.catch( next );
});

const sendToken = ( token ) => String.raw`
	<script>
		debugger;
		window.localStorage.token='${token}';
		window.location.assign('/');
	</script>`;

router.get( '/twitter/callback', ( req, res, next ) => {
	
	const profile = req.query;
	const twitterId = profile.raw.user_id;
	
	User.findOne( { twitterId } )
		.then( user => {
			if ( user ) return user;
			return new User({
				username: profile.raw.screen_name,
				twitterId,
				twitterProfile: profile,
				roles: []
			}).save();
		})
		.then( user => token.sign( user ) )
		// .then( token => res.json({ token }) )
		.then( token => {
			res.send( sendToken( token ) );
		})
		.catch( next );
});

router.post('/signin', jsonParser, ( req, res, next ) => {
	const { username, password } = req.body;
	delete req.body;
	
	User.findOne({ username })
		.then( user => {
			
			if ( !user ) {
				return res.status(400).json({
					msg: 'authentication sez no!',
					reason: 'no user ' + username
				});
			}
			
			if ( !user.compareHash( password ) ) {
				return res.status(400).json({
					msg: 'authentication sez no!',
					reason: 'password doesn\'t match!'
				});
			}
			
			token.sign( user ).then( token => res.json({ token }) );
		})
		.catch( err => {
			next({ message: err });
		});
	
});

module.exports = router;