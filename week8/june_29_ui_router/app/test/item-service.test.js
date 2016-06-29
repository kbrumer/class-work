/* globals angular, chai */

const assert = chai.assert;

describe( 'directive', () => {

	let $httpBackend = null, itemService = null;

	beforeEach( 
		angular.mock.module( 'services', $provide => {
			$provide.value( 'apiUrl', '/api' );
		}) 
	);

	beforeEach( angular.mock.inject( ( _itemService_, _$httpBackend_ ) => {
		$httpBackend = _$httpBackend_;
		itemService = _itemService_;
	}));

	afterEach( () => {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	it( 'gets items', done => {
		const listId = 123;
		const items = [ 1, 2, 3];
		$httpBackend
			.expectGET( `/api/todos/${listId}/items` )
			.respond( items );

		itemService.get( listId )
			.then( returnedItems => {
				assert.deepEqual( returnedItems, items );
				done();
			})
			.catch( done );

		$httpBackend.flush();
	});

	it( 'adds item', done => {
		const listId = 123;
		const newItem = { task: 'addme', done: false };
		const returnItem = { isReturnItem: true };

		$httpBackend
			.expectPOST( `/api/todos/${listId}/items`, newItem )
			.respond( returnItem );

		itemService.add( listId, newItem )
			.then( item => {
				assert.deepEqual( item, returnItem, 'return item not same' );
				done();
			})
			.catch( done );


		$httpBackend.flush();
	});

});