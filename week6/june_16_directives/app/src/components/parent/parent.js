import template from './parent.html';

export default {
	replace: true,
	template,
	controllerAs: 'parent',	
	controller: function(){
		this.doSomething = function(){
			console.log('you phoned home!');
		};
	}
};