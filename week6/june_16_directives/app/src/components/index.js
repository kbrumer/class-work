import angular from 'angular';
import parent from './parent/parent';
import child from './child/child';

const components = angular.module( 'components', [] )
	.component( 'parent', parent )
	.component( 'child', child );

export default components.name;