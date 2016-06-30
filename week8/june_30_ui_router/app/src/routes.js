configRoutes.$inject = [ '$stateProvider', '$urlRouterProvider' ];

export default function configRoutes( $stateProvider, $urlRouterProvider ) {

	$stateProvider
		.state( 'home', {
			url: '/',
			views: {
				header: {
					component: 'homeHeader'
				},
				main: {
					template: '<p>welcome to our todo app</p>'
				}
			}
		})
		.state( 'account', {
			url: '/account',
			views: {
				main: {
					template: '<p>your account is overdue by $0, please pay immediately</p>'
				}
			}
		})
		.state( 'lists', {
			url: '/todos?display',
			resolve: {
				display: [ '$stateParams', p => p.display ]
			},
			views: {
				main: {
					component: 'lists'
				}
			}
		})
		.state( 'list', {
			url: '/todos/:listId?display',
			resolve: {
				todoList: [ 'listService', '$stateParams', ( list, p ) => list.get( p.listId ) ],
				display: [ '$stateParams', p => p.display ]
			},
			views: {
				header: {
					component: 'todoListHeader'
				},
				main: {
					component: 'todoList'
				}
			}
		});

	$urlRouterProvider.otherwise( '/' );
}



// export default function configRoutes( $stateProvider, $urlRouterProvider ) {

// 	$stateProvider
// 		.state( 'home', {
// 			url: '/',
// 			template: '<p>welcome to our todo app</p>'
// 		})
// 		.state( 'lists', {
// 			url: '/lists',
// 			component: 'lists'
// 		})
// 		.state( 'list', {
// 			url: '/lists/:listId',
// 			resolve: {
// 				todoList: [ 'listService', '$stateParams', ( list, p ) => {
// 					return list.get( p.listId ); 
// 				}]
// 			},
// 			component: 'todoList'
// 		});

// 	$urlRouterProvider.otherwise( '/' );
// }
