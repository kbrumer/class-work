import template from './child.html';

export default {
	replace: true,
	template,
	controllerAs: 'child',	
	bindings: {
		color: '='
	},
	require: {
		parent: '^'
	},
	controller: function(){
		this.foo = 'FOO';
		
		// if you need access during init,
		// you must use $onInit
		this.$onInit = function(){
			this.parent.doSomething();
		};
	}
};