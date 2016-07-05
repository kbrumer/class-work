import template from './app.html';


export default {
	template,
	controllerAs: 'app',
	controller( $state ) {

		this.user = {
			username: 'martypdx'
		};

		this.listId = '5771b798b784ade02469451e';
		
		this.goToLists = () => {
			$state.go( 'lists' );
		};
	}
};
