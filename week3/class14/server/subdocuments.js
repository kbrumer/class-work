const dbURI = process.env.MONGO_URI || 'mongodb://localhost/pets'; 
const db = require( './lib/mongoose-connect' )( dbURI );

const Pet = require( './models/pet' );
const User = require( './models/user' );

const fred = new Pet({ name: 'fred' } );
const tweety = new Pet({ name: 'tweety' } );

const user = new User();
user.name = 'marty';
user.pets = [];
user.pets.push( fred );
user.pets.push( tweety );

const me = new User({
	name: 'marty',
	pets: [ fred, tweety ]
});

me.save()
	.then( user => console.log( user ) )
	.catch( err => console.error( err ) )
	.then( () => db.close() );
	


// User.findOne({ 'pets.name': 'tweety' } )
// 	.then( user => console.log( user ) )
// 	.catch( err => console.error( err ) )
// 	.then( () => db.close() );
