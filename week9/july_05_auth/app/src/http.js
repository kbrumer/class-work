configHttp.$inject = [ '$httpProvider' ];

export default function configHttp( $httpProvider ) {
	$httpProvider.interceptors.push( interceptor );
}

interceptor.$inject = [ /*'$window'*/ ];

function interceptor( /*$window*/ ) {

	return {
		request( config ) {
			config.headers = config.headers || {};

			// const token = $window.localStorage.getItem( 'satellizer_token' );
			const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU3N2JlZWI5NWVjYjIzMDYyZjAyNWJjOCIsInJvbGVzIjpbXSwiaWF0IjoxNDY3NzM5ODMzfQ.boy946cqKQUDAwRrFt9ilY-oTx9QWcL0hvo9McRBXng';

			if ( token ) {
				config.headers.Authorization = `Bearer ${token}`;
			}	
								
			return config;
		},
		response( response ) {
			return response;
		}
	};
}

