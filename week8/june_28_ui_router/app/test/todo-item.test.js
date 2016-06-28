/* globals angular, chai */

const assert = chai.assert;

describe( 'directive', () => {

	angular.mock.module.sharedInjector();
	before(angular.mock.module( 'todoApp' ) );

	let $component;
	before(angular.mock.inject( ( $rootScope, _$componentController_ ) => {
		$component = ( name, bindings ) => _$componentController_( name, null, bindings );
	}));

	it( 'initializes with correct data', () => {
		const task = 'The task to do';
		const done = true;

		const todo = $component( 'todoItem', { task, done } );

		assert.equal( todo.task, task );
		assert.equal( todo.done, done );
	});

	it( 'calls remove when task is removed', () => {
		let removeCalled = false;
		const remove = () => removeCalled = true;

		const todo = $component( 'todoItem', { remove } );
		
		todo.remove();
		assert.isTrue( removeCalled );
	});

});