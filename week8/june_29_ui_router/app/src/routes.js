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
			url: '/todos/:listId',
			resolve: {
				listId: [ '$stateParams', p => p.listId ]
			},
			component: 'todos'
		});

	$urlRouterProvider.otherwise( '/' );
}
