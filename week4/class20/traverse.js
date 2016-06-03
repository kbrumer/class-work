
const tree = {
	value: 'A',
	children: [{ 
		value: 'B',
		children: [
			{ value: 'D', children: [] },
			{ value: 'E', children: [] },
			{ value: 'F', children: [
				{ value: 'I', children: [] },
				{ value: 'J', children: [] }
			]}
		]
	},{
		value: 'C',
		children: [
			{ value: 'G', children: [
				{ value: 'K', children: [] },
				{ value: 'L', children: [] }
			]},
			{ value: 'H', children: [] }
		]
	}]
};

function depth( node ) {
	console.log( node.value );
	node.children.forEach( depth );
}


function breadth( tree ) {
	const levels = [];
	
	function recurse( node, level = 0 ) {
		const list = levels[ level ] || ( levels[ level ] = [] );
		list.push( node );
		level++;
		node.children.forEach( node => recurse( node, level ) );
	}
	
	recurse( tree );
	
	levels.forEach( level => {
		level.forEach( node => console.log( node.value ) );
	});
}

breadth( tree );