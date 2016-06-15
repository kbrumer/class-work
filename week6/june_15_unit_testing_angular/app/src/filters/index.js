import angular from 'angular';
import reverse from './reverse';

const filters = angular.module( 'filters', [] )
	.filter( 'reverse', reverse );

export default filters.name;