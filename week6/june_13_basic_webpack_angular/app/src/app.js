const angular = require( 'angular' );
const greeting = require( './greeting' );
require( './css/main.css' );

const app = angular.module( 'app', [] );
app.controller( 'main', function( $scope ){
	$scope.place = 'pdx';
	$scope.greeting = greeting;
});