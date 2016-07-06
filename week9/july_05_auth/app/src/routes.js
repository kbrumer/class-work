configRoutes.$inject = [ '$stateProvider', '$urlRouterProvider' ];

export default function configRoutes( $stateProvider, $urlRouterProvider ) {

	$stateProvider
		.state( 'home', {
			url: '/',
			data: { requiresAuth: false },
			views: {
				header: {
					component: 'homeHeader'
				},
				main: {
					template: `
						<p>welcome to our todo app</p>
						<p><a ui-sref="lists">Click to get started</a></p>
					`
				}
			}
		})
		.state( 'account', {
			url: '/account?display',
			data: { requiresAuth: true },			
			resolve: {
				display: [ '$stateParams', p => p.display || 'list' ]
			},
			views: {
				header: {
					component: 'displayHeader'
				},
				main: {
					component: 'account'
				}
			}
		})
		.state( 'lists', {
			url: '/todos',
			data: { requiresAuth: true },
			views: {
				main: {
					component: 'lists'
				}
			}
		})
		.state( 'list', {
			url: '/todos/:listId?display',
			data: { requiresAuth: true },
			params: { display: { dynamic: true } },
			resolve: {
				todoList: [ 'listService', '$stateParams', ( list, p ) => list.get( p.listId ) ],
				display: [ '$stateParams', p => p.display || 'list' ]
			},
			views: {
				header: {
					component: 'displayHeader'
				},
				main: {
					component: 'todoList'
				}
			}
		});

	$urlRouterProvider.otherwise( '/' );
}