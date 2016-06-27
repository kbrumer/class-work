import template from './todo-item.html';
import styles from './todo-item.scss';

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