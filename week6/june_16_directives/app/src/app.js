import angular from 'angular';
import directives from './directives';
import components from './components';

const app = angular.module( 'app', [ 
	directives,
	components
]);

app.controller( 'app', function(){
	this.counter = 0;
	this.increment = () => {
		this.counter++;
	};
});

export default app.name;

