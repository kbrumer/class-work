const dbURI = process.env.MONGO_URI || 'mongodb://localhost/pets'; 
const db = require( './lib/mongoose-connect' )( dbURI );

const Pet = require( './models/pet' );

// const tweety = new Pet({ name: 'tweety' } );
// tweety.save()
const body = {
	name: 'frank'
};

const id = '574772c721db89ad2b19cd47';

Pet.findById( id ).then( pet => {
	Pet.schema.eachPath( path => {
		if ( path[0] !== '_' ) {
			if( body.hasOwn)
			
		}
	});
	pet.name = 'jo';
	pet.set( 'type' );
	return pet.save();
})
	.then( pet => console.log( pet ) )
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
