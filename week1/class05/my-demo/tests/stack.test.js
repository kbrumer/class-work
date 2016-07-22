const assert = require( 'assert' );
const Stack = require( '../stack' );

it('adds two items to a stack', () => {
	const stack = new Stack();
  stack.push('foo');
  stack.push('bar');
  assert.equal(stack.length(), 2, `a1 stack has length ${stack.length()}`);
  const bar = stack.pop();
  assert.equal(bar, 'bar', `a2 ${bar} is 'bar'`);
  assert.equal(stack.length(), 1, `a3 stack has length ${stack.length()}`);
});

it('peeks at a stack', () => {
	const stack = new Stack();
  stack.push('cat');
  stack.push('dog');
  stack.push('horse');
  assert.equal(stack.length(), 3, `b1 stack has length ${stack.length()}`);

  const horse = stack.peek();
  assert.equal(horse, 'horse', `b2 ${horse} is 'horse'`);
  assert.equal(stack.length(), 3, `b3 stack has length ${stack.length()}`);
});
