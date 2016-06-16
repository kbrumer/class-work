import angular from 'angular';
import simple from './simple/simple';

const components = angular.module( 'components', [] )
	.directive( 'simple', simple );

export default components.name;