/* globals angular, chai */

const assert = chai.assert;

describe( 'reverse filter', () => {

	angular.mock.module.sharedInjector();
	before( angular.mock.module( 'filters' ) );

	let $filter;
	before( angular.mock.inject( function( _$filter_ ) {
		$filter = _$filter_;
	}));

	it( 'reverses', () => {
		const filter = $filter('reverse');
		assert.equal(filter('hello'), 'olleh');
	});
});