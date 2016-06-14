import angular from 'angular';
import main from './main';
import counter from './counter';
import monkeys from './monkeys';

const controllers = angular.module( 'controllers', [] )
	.controller( 'main', main )
	.controller( 'counter', counter )
	.controller( 'monkeys', monkeys );

export default controllers.name;