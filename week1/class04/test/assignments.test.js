var assert = require( 'assert' );
var Assignments = require( '../Assignments' );

describe( 'assignments', () => {
	
	var assignments;
	
	beforeEach( () => {
		assignments = new Assignments();
	});
		
	it( 'fires correct event', () => {
		var fired = false;
		
		assignments.on( 'submit', student => {
			assert.equal( student, 'martypdx' );
			fired = true;
		});	
		
		assignments.emit( 'submit', 'martypdx' );
		
		assert.ok( fired );
	});

	it( 'doesn\'t fire when event name is different', () => {
		assignments.on( 'submit', student => {
			assert( false );
		});	
		assignments.emit( 'graduate', 'martypdx' );
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
		
		assignments.emit( 'graduate', 'martypdx' );
		assignments.emit( 'submit', 'martypdx' );
		
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
		
		assignments.emit( 'submit', 'martypdx' );
		
		assert.equal( count, 2 );
	});

});