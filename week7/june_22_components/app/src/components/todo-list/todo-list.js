import template from './todo-list.html';
let i = 10;
export default {
	template,
	bindings: {
		todos: '='
	},
	require: {
		app: '^^'
	},
	controllerAs: 'list',
	controller() {
		this.remove = index => {
			this.todos.splice( index, 1 );
		};

		this.add = task => {
			this.todos.push( { 
				id: i++, 
				task, 
				done: false 
			});
		};
	}
};