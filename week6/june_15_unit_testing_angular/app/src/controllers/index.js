import angular from 'angular';
import main from './main';
import counter from './counter';
import monkeys from './monkeys';
import cowsay from './cowsay';

const controllers = angular.module( 'controllers', [] )
	.controller( 'main', main )
	.controller( 'cowsay', cowsay )
	.controller( 'counter', counter )
	.controller( 'monkeys', monkeys );

export default controllers.name;