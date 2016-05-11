
var haha = function(){
	console.log( 'fooled you' );
};

function getData( fn, greeting ) {
	
	setTimeout( function() {
		fn( [ { name: 'bob'}, { name: 'jill' }, { name: greeting } ] );		
	}, 2000 );
	fn = haha;
}

getData( function( data ) {
	console.log( data );
}, 'hi' );


for( var i = 0; i < 5; i++ ) {
	setTimeout( function() {
		console.log( i );	
	}, 10 * i );
}

var arr = [1, 2, 3, 4, 5];
arr.forEach( function ( each, i ) {
	setTimeout( function() {
		console.log( i );	
	}, 10 * i );
});

