import angular from 'angular';
import helloWorld from './helloWorld';

const directives = angular.module( 'directives', [] )
	.directive( 'helloWorld', helloWorld );

export default directives.name;