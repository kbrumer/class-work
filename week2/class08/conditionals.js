

// if( condition ) {
// 	doSomething( obj, 'blue' );
// } else {
// 	doSomething( obj, 'red' );
// }

// var color = condition ? 'blue' : 'red';

if( condition ) {
	color = { something: 'foo', value: 'blue' };
} else {
	color = { something: 'foo', value: 'red' };
}
doSomething( obj, color );