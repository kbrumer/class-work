import template from './app.html';


export default {
	template,
	controllerAs: 'app',	
	controller: function(){
		this.todos = [{ 
			id: 0,
			task: 'write some components',
			done: true
		}, { 
			id: 1,
			task: 'nest components',
			done: false
		}];

		this.user = 'martypdx';
	}
};