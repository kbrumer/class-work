import template from './todo-list.html';

export default {
	template,
	controllerAs: 'list',
	controller
};

controller.$inject = [ '$http' ];

function controller( $http ) {
	$http.get( 'http://localhost:3000/api/todos' )
		.then( result => {
			this.todos = result.data;
		});

	this.remove = ( id, index ) => {
		$http
			.delete( `http://localhost:3000/api/todos/${id}` )
			.then( () => {
				this.todos.splice( index, 1 );
			})
			.catch( err => console.error( err ) );
	};

	this.add = task => {
		const todo = { task, done: false };
		$http
			.post( 'http://localhost:3000/api/todos', todo )
			.then( result => {
				this.todos.push( result.data ); 
			})
			.catch( err => console.error( err ) );
	};
}