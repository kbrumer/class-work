function Animal ( name ) {
	// init
	this.name = name; 
}

Animal.prototype.eat = function () {
	console.log( 'feed', this.name );
};

class Animal {
	
	constructor( name ) {
		this.name = name;
	}
	
	eat() {
		console.log( 'feed', this.name );
	}
}