configRoutes.$inject = [ '$stateProvider', '$urlRouterProvider' ];

export default function configRoutes( $stateProvider, $urlRouterProvider ) {

	$stateProvider
		.state( 'home', {
			url: '/',
			template: '<p>welcome to our todo app</p>'
		})
		.state( 'lists', {
			url: '/todos',
			component: 'lists'
		})
		.state( 'list', {
			url: '/:listId',
			resolve: {
				listId: [ 
					'$stateParams', 
					$stateParams => $stateParams.listId 
				]
			},
			component: 'todos'
		})
		.state( 'account', {
			url: '/account',
			template: '<p>this is your account</p>'
		});

	$urlRouterProvider.otherwise( '/' );
}
