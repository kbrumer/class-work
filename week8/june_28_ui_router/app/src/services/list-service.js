
/* Factory example */
listService.$inject = [ '$http', 'apiUrl' ];

export default function listService( $http, apiUrl ) {

	return {
		get() {
			return $http
				.get( `${apiUrl}/todos` )
				.then( r => r.data );
		},
		add( list ) {
			return $http
				.post( `${apiUrl}/todos`, list )
				.then( r => r.data );
		},
		remove( listId ) {
			return $http
				.delete( `${apiUrl}/todos/${listId}` )
				.then( r => r.data );
		}
	};
}
