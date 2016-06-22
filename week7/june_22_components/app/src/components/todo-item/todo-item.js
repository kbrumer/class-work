import template from './todo-item.html';
import styles from './todo-item.css';

export default {
	template,
	controllerAs: 'todo',
	bindings: {
		task: '=',
		done: '=',
		remove: '&'
	},
	controller: function(){
		this.styles = styles;


	}
};