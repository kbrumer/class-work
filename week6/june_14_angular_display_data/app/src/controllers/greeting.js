const cool = require( 'cool-ascii-faces' );

export function greet( place = 'world' ) {
	return `yo ${place} ${cool()}`;
}

function doSomething(){}

const foo = 'FOO';

export { doSomething, foo };