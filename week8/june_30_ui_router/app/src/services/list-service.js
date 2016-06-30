
/* Factory example */
listService.$inject = [ '$http', 'apiUrl' ];

export default function listService( $http, apiUrl ) {

	return {
		getAll() {
			return $http
				.get( `${apiUrl}/todos` )
				.then( r => r.data );
		},
		get( id ) {
			return $http
				.get( `${apiUrl}/todos/${id}` )
				.then( r => r.data );
		},
		update( list ) {
			const update = { name: list.name };
			return $http
				.put( `${apiUrl}/todos/${list.id}`, update )
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
