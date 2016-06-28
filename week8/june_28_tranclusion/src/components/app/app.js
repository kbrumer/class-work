import template from './app.html';


export default {
	template,
	controllerAs: 'app',
	controller() {
		this.user = {
			username: 'martypdx'
		};

		this.alert = () => alert('hello from app');
	}
};
