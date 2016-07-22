const assert = require( 'assert' );
const Queue = require( '../queue' );

it('adds two items to a queue', () => {
	const queue = new Queue();
  queue.enqueue('foo');
  queue.enqueue('bar');
  assert.equal(queue.length(), 2, `a1 queue has length ${queue.length()}`);

  const foo = queue.dequeue();
  assert.equal(foo, 'foo', `a2 ${foo} is 'foo'`);
  assert.equal(queue.length(), 1, `a3 queue has length ${queue.length()}`);

  const bar = queue.dequeue();
  assert.equal(bar, 'bar', `a4 ${bar} is 'bar'`);
  assert.equal(queue.length(), 0, `a5 queue has length ${queue.length()}`);
});

it('peeks at a queue', () => {
	const queue = new Queue();
  queue.enqueue('cat');
  queue.enqueue('dog');
  queue.enqueue('horse');
  assert.equal(queue.length(), 3, `b1 queue has length ${queue.length()}`);

  const cat = queue.dequeue();
  assert.equal(cat, 'cat', `b2 ${cat} is 'cat'`);
  assert.equal(queue.length(), 2, `b3 queue has length ${queue.length()}`);

  const dog = queue.dequeue();
  assert.equal(dog, 'dog', `b4 ${dog} is 'dog'`);
  assert.equal(queue.length(), 1, `b5 queue has length ${queue.length()}`);

  const horse = queue.peek();
  assert.equal(horse, 'horse', `b6 ${horse} is 'horse'`);
  assert.equal(queue.length(), 1, `b7 queue has length ${queue.length()}`);
});
