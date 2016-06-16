import angular from 'angular';
import helloWorld from './helloWorld';
import simple from './simple';

const directives = angular.module( 'directives', [] )
	.directive( 'helloWorld', helloWorld )
	.directive( 'simple', simple );

export default directives.name;