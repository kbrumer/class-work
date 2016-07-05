
auth.$inject = [ '$rootScope' ];

export default function auth( $rootScope ) {
	
	$rootScope.$on('$stateChangeStart', ( event, toState, toParams, fromState, fromParams ) => {
	
		console.log( '$scs', toState, toParams, fromState, fromParams );

	});
}