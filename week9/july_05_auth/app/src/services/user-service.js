userService.$inject = [ '$window' ];

const TOKEN_NAME = 'token';

export default function userService( $window ) {

	return {
		isAuthenticated() {
			return !!$window.localStorage.getItem( TOKEN_NAME );
		}
	};
}
