const values = {
	I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	D: 500,
	M: 1000
};

function toDecimal( roman ) {
	let i = roman.length;
	let sum = 0;
	let value, next;
	
	while( value = values[ roman[--i] ] ) {
		if ( value < next ) sum -= value;
		else sum += value;
		next = value;
	}
	
	return sum;
}

[ 'XXIV', 'IV', 'CXLVII', 'III', 'XLIV' ]
	.map( r => [ r, toDecimal(r) ] )
	.forEach( n => console.log( n[0], n[1] ) );