const dbURI = process.env.MONGO_URI || 'mongodb://localhost/pets'; 
const db = require( './lib/mongoose-connect' )( dbURI );

const Pet = require( './models/pet' );
const User = require( './models/user' );
const Toy = require( './models/toy' );


const me = new User({ name: 'marty' });
const fred = new Pet({ name: 'fred', owner: me.id } );
const tweety = new Pet({ name: 'tweety', owner: me.id } );
const toy = new Toy({ name: 'ball', pet: tweety.id });

Promise.all([
	fred.save(),
	tweety.save(),
	me.save(),
	toy.save()
])
	.then( results => results.forEach( r => console.log( r ) ) )
	.catch( err => console.error( err ) )
	.then( () => db.close() );
	


// Toy.findById('5747341a46f079c411416aa2')
// 	.populate( {
// 		path: 'pet',
// 		populate: { path: 'owner' } 
// 	})
// 	.then( toy => console.log( toy ) )
// 	.catch( err => console.error( err ) )
// 	.then( () => db.close() );
