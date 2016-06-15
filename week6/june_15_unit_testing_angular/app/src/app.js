import angular from 'angular';
import controllers from './controllers';
import filters from './filters';

export default angular.module( 'app', [ 
	controllers,
	filters 
]).name;

