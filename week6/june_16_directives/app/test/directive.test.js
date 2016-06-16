/* globals angular, chai */

const assert = chai.assert;

describe( 'directive', () => {

	//angular.mock.module.sharedInjector();
	beforeEach(angular.mock.module( 'directives' ) );

	let $compile;
	beforeEach(angular.mock.inject( _$compile_ => {
		$compile = _$compile_;
	}));

	
	it( 'does the right thing', () => {
		const render = $compile('<div hello-world></div>');
		const compiledElement = render({/*$scope*/});
		assert.equal(compiledElement.html(), '<h2>hello world</h2>');
	});

});