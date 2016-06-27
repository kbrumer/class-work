const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );

app.use( express.static( __dirname + '/public' ) );

app.use( ( req, res, next ) => {
	const url = '*';
	res.header( 'Access-Control-Allow-Origin', url );
	res.header( 'Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE' );
	res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' );
	next();
});

const todos = [{ 
	id: 0,
	task: 'write some components',
	done: true
}, { 
	id: 1,
	task: 'nest components',
	done: false
}];

app.get('/api/todos', ( req, res ) => {
	res.send( todos );
});

app.post( '/api/todos', bodyParser.json(), ( req, res ) => {
	const todo = req.body;
	todo.id = todos.length;
	todos.push( todo );
	res.send( todo );
});

app.delete( '/api/todos/:id', ( req, res ) => {
	const index = todos.findIndex( t => t.id == req.params.id );
	if ( index >= 0 ) todos.splice( index, 1 );
	res.send({ success: true });
});

app.listen( 3000 );