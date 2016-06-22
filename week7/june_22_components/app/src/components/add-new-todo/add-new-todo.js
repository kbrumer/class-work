import template from './add-new-todo.html';

export default {
	template,
	controllerAs: 'addNew',
	bindings: {
		add: '&'
	},
	// require: {
	// 	list: '^todoList'
	// },
	controller: function(){
		this.item = '';
		this.submit = function(){
			const item = this.item;
			if ( !item ) return;
			// this.list.add(item);
			this.add({ task: item });

			this.item = '';
		};
	}
};