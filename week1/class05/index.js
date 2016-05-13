

function hasDups( arr ) {
	
	var found = Object.create(null);
	
	for( var i = 0, l = arr.length, item; i < l; i++ ) {
		item = arr[i];
		if ( found[ item ] ) return true;
		found[ item ] = true;
	}
	
	return false;
}