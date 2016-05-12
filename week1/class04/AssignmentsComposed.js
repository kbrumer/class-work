const EventEmitter = require( 'events' );

module.exports = class Assignments {
	constructor(){
		this.ee = new EventEmitter();
	} 
	on( name, handler ){
		this.ee.on( name, handler );
	}
	submit( student ){
		this.ee.emit( 'submit', student );
	}
	graduate( student ){
		this.ee.emit( 'graduate', student );
	}
};