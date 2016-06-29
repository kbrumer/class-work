import template from './lists.html';

export default {
	template,
	controller
};

controller.$inject = [ 'listService' ];

function controller( listService ) {
	listService.get().then( lists => this.lists = lists );
}
