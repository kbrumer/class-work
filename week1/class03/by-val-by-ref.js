function add( x ) {
	x = 5;
	console.log( x );
}

var a = 3;

console.log( a );

add( a );

console.log( a );

function foo( thing ) {
	thing.foo = 'bar';
	console.log(thing );
}

var obj = { foo: 'foo' };

console.log( obj );

foo( obj );

console.log( obj );

function foo2( thing ) {
	thing = { foo: 'bar' };
	console.log( thing );
}

var obj = { foo: 'foo' };

console.log( obj );

foo2( obj );

console.log( obj );


function funct( fn ) {
	fn.bye = 'push';
	console.log( fn );
}

var fn = function(){};
fn.hello = 'pop';

console.log( fn );
funct(fn);
console.log( fn );