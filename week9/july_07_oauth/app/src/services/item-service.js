
/* Factory example */
itemService.$inject = [ '$http', 'apiUrl' ];

export default function itemService( $http, apiUrl ) {

	return {
		get( listId, id ) {
			return $http
				.get( `${apiUrl}/todos/${listId}/items${id}` )
				.then( r => r.data );
		},
		add( listId, item ) {
			return $http
				.post( `${apiUrl}/todos/${listId}/items`, item )
				.then( r => r.data );
		},
		update( listId, item ) {
			return $http
				.put( `${apiUrl}/todos/${listId}/items/${item.id}`, item )
				.then( r => r.data );
		},
		remove( listId, id ) {
			return $http
				.delete( `${apiUrl}/todos/${listId}/items/${id}` )
				.then( r => r.data );
		}
	};
}

/* Provider Example */
// export default function itemServiceProvider() {

// 	let apiUrl = '/api';
// 	let apiLimit = -1;

// 	this.setUrl = ( url ) => {
// 		console.log( 'setting url', url );
// 		apiUrl = url;
// 		return this;
// 	};

// 	this.setLimit = limit => {
// 		apiLimit = limit;
// 		return this;
// 	}; 

// 	this.$get = itemService;

// 	itemService.$inject = [ '$http' ];
// 	function itemService( $http ) {
// 		return {
// 			get( listId ) {
// 				return $http
// 					.get( `${apiUrl}/todos/${listId}/items` )
// 					.then( r => r.data );
// 			},
// 			add( listId, item ) {
// 				return $http
// 					.post( `${apiUrl}/todos/${listId}/items`, item )
// 					.then( r => r.data );
// 			},
// 			remove( listId, id ) {
// 				return $http
// 					.delete( `${apiUrl}/todos/${listId}/items/${id}` )
// 					.then( r => r.data );
// 			}
// 		};
// 	}


// }


/* If we wanted a true service: */

// export default class ItemService {
// 	constructor ( $http, apiUrl ) {
// 		this.$http = $http;
// 		this.apiUrl = apiUrl;
// 	}

// 	get( listId ) {
// 		return this.$http
// 			.get( `${this.apiUrl}/todos/${listId}/items` )
// 			.then( r => r.data );
// 	}

// 	add( listId, item ) {
// 		return this.$http
// 			.post( `${this.apiUrl}/todos/${listId}/items`, item )
// 			.then( r => r.data );
// 	}

// 	remove( listId, id ) {
// 		return this.$http
// 			.delete( `${this.apiUrl}/todos/${listId}/items/${id}` )
// 			.then( r => r.data );
// 	}
// }

// ItemService.$inject = [ '$http', 'apiUrl' ];
