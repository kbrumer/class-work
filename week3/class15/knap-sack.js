
function pack( items, max ) {
	const combinations = getCombinations( items );
	
	function sumOf( combo, prop ) {
		if ( combo.length === 1 ) return combo[0][prop];
		return combo.reduce( ( total, item ) => {
			return total + item[prop];
		}, 0);		
	}
	
	const weighted = combinations.filter( c => {
		return sumOf(c, 'weight' ) <= max;
	});
	
	weighted.forEach( w => w.value = sumOf( w, 'value' ) );
	
	weighted.sort( ( a, b ) => b.value - a.value );
		
	return weighted[0];
	
}

function getCombinations( items ) {
	const combinations = [];
	
	function getOne( items, existing, index ) {
		const copy = items.slice();
		existing.push( copy.splice( index, 1 )[0] );
		combinations.push( existing );
		iterate( copy, existing );
	}
	
	function iterate( items, existing ) {
		items.forEach( ( item, i ) => {
			getOne( items, existing.slice(), i );
		});
	}
	
	iterate( items, [] );
	
	return combinations;
}

const fruits = [
	{ name: 'orange', weight: 3, value: 7 },
	{ name: 'apple', weight: 2, value: 5 },
	{ name: 'banana', weight: 4, value: 10 },
	// { name: 'banana', weight: 4, value: 4 },
	// { name: 'peanut', weight: 1, value: 6 },
	{ name: 'kiwi', weight: 1, value: 3 }
];

const toPack = pack( fruits, 5 );
console.log( toPack );
