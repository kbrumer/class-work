import moment from 'moment';

export default function( ngModule ) {
	
	ngModule.filter( 'moment', function() {
		return function filter( date, display ){
			if ( !display || !display.format ) { return ''; }
			return moment( date ).format( display.format );
		};
	});
	
}