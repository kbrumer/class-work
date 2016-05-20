
function Stack () {
	var array = [];
	
	this.push = array.push.bind( this );
	this.pop = array.pop.bind(array);
	
	this.peek = function() {
		return array[ array.length - 1 ];
	};
}

// Stack.prototype.foo = function() {
	
// 	somethingAsync( this.name ).then( result => {
// 		this.process( result );
// 	});
// };

var stack = new Stack();

stack.push( 1 );