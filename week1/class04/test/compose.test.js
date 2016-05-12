const assert = require( 'assert' );
const Assignment = require('../AssignmentsComposed');

describe( 'Assignments Composed', () => {
	
	var assignments;
	
	beforeEach( () => {
		assignments = new Assignment();
	});
		
	it( 'fires correct event', () => {
		var fired = false;
		
		assignments.on( 'submit', student => {
			assert.equal( student, 'martypdx' );
			fired = true;
		});	
		
		assignments.submit( 'martypdx' );
		
		assert.ok( fired );
	});

	it( 'doesn\'t fire when event name is different', () => {
		assignments.on( 'submit', student => {
			assert( false );
		});	
		assignments.graduate( 'martypdx' );
	});

	it( 'only fires correctly named event', () => {
		var submitFired = false;
		var graduateFired = false;
		
		assignments.on( 'graduate', student => {
			graduateFired = true;
		});
			
		assignments.on( 'submit', student => {
			submitFired = true;
		});	
		
		assignments.graduate( 'martypdx' );
		assignments.submit( 'martypdx' );
		
		assert.ok( submitFired, 'submit' );
		assert.ok( graduateFired, 'graduate' );
	});

	it( 'multiple event subscribers', () => {
		var count = 0;
		
		assignments.on( 'submit', student => {
			assert.equal( student, 'martypdx' );
			count++;
		});		
		
		assignments.on( 'submit', student => {
			assert.equal( student, 'martypdx' );
			count++;
		});	
		
		assignments.submit( 'martypdx' );
		
		assert.equal( count, 2 );
	});

});