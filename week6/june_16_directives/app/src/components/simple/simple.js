import template from './simple.html';

export default function simple() {
	return {
		restrict: 'E',
		replace: true,
		controllerAs: 'simple',	
		bindToController: true,
		scope: {
			color: '=',
			click: '&onClick'
		},
		template,
		controller: function(){
			this.foo = 'FOO';
		}
	};
}