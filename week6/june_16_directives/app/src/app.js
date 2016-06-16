import angular from 'angular';
import directives from './directives';
import components from './components';

const app = angular.module( 'app', [ 
	directives,
	components
]);

app.controller( 'main', function(){
	this.counter = 0;
	this.increment = value => {
		this.counter += value || 0;
	};
});

app.directive('taskItem', function() {
	return {
		restrict: 'E',
		require: '^main',
		replace: true,
		controller: function() {
			this.$onInit = function(){
				this.parent.foo();
			};
		}
	};
});

export default app.name;

