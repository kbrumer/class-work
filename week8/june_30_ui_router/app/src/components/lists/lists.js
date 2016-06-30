import template from './lists.html';

export default {
	template,
	bindings: {
		display: '<'
	},
	controller
};

controller.$inject = [ 'listService' ];

function controller( listService ) {
	listService.getAll().then( lists => this.lists = lists );
}
