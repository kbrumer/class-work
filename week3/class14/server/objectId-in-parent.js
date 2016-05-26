const dbURI = process.env.MONGO_URI || 'mongodb://localhost/pets'; 
const db = require( './lib/mongoose-connect' )( dbURI );

const Pet = require( './models/pet' );
const User = require( './models/user' );

// const fred = new Pet({ name: 'fred' } );
// const tweety = new Pet({ name: 'tweety' } );

// const me = new User({
// 	name: 'marty',
// 	pets: [ fred.id, tweety.id ]
// });

// Promise.all([
// 	fred.save(),
// 	tweety.save(),
// 	me.save()
// ])
// 	.then( results => results.forEach( r => console.log( r ) ) )
// 	.catch( err => console.error( err ) )
// 	.then( () => db.close() );
	


User.findOne({})
	.select( 'name pets' )
	.populate( 'pets', 'name' )
	.then( user => console.log( user ) )
	.catch( err => console.error( err ) )
	.then( () => db.close() );
