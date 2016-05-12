module.exports = class Assignments {
	constructor(){
		this.handlersByName = {};
	} 
	on( name, handler ){
		var handlers = this.handlersByName[ name ];
		if ( !handlers ) {
			handlers = this.handlersByName[ name ] = [];
		}
		handlers.push( handler );
	}
	emit( name, student ){
		const handlers = this.handlersByName[ name ];
		if ( handlers ) {
			handlers.forEach( handler => handler( student ) );
		}
	}
};

/* example of static method

Bitmap.read( filename, bitmap => {
	bitmap.transformGreyScale();
});

var bitmap = new Bitmap( buffer );
bitmap.transformGreyScale();
*/