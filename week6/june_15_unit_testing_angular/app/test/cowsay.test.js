/* globals angular, chai */

const assert = chai.assert;

describe( 'cowsay', () => {

	angular.mock.module.sharedInjector();
	before( angular.mock.module( 'controllers' ) );

	var $controller, $scope;
	before( angular.mock.inject( function( $rootScope, _$controller_ ) {
		$rootScope.foo = 'FOO';
		$scope = $rootScope.$new();
		$controller = _$controller_;
	}));

	describe( 'initial values and defaults', () => {

		before( () => {
			$controller( 'cowsay', { $scope, $http: 'barrel full of monkeys' } );
		});

		it( 'has cow types', () => {
			assert.isAtLeast($scope.types.length, 10);
			assert.typeOf($scope.types[0], 'string');
		});

		it( 'has correct defaults', () => {
			assert.equal($scope.type, 'default' );
			assert.equal($scope.text, 'I\'m a moooodule');
			assert.equal($scope.method, 'say');
		});

		it( 'produces some output', () => {
			const cow = $scope.cow( 'think', 'koala', 'more eucalyptus plz!' );
			assert.equal( cow, ` ______________________
( more eucalyptus plz! )
 ----------------------
  o
   o
       ___  
     {~._.~}
      ( Y )
     ()~*~()   
     (_)-(_)   ` );
		});

	});

});