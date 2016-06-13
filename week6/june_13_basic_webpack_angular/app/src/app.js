const angular = require( 'angular' );
// const greeting = require( './greeting' );
const cowsay = require( 'cowsay-browser' );
require( './css/main.css' );

const app = angular.module( 'app', [] );
app.controller( 'main', function( $scope ){
	$scope.text = 'I\'m a moooodule';
	$scope.method = 'say';
	$scope.cow = function( method, text ) {
		return cowsay[method]({
			text: text || '(I\'m speechless)',
			e : 'Oo',
			T : 'U '
		});
	};
});