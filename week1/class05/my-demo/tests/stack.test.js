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


function balanced(input) {
	const pairs = new Stack();
	const rv = [...input].map(function(c){
		if (c === '(') {
			pairs.push(c);
			return true;
		} else if (c === ')'){
			if (!pairs.pop()){
				return false;
			} else {
				return true;
			}
		} else {
			return true;
		}
	}).every(el => el);
	return rv && pairs.length() === 0;

}

it('tests balanced parens 01', () => {
	const input = 'this ( is a test ( of balanced ( parens ())))';
	const rv = balanced(input);
	assert.equal(rv, true, `c1 rv is ${rv}`);
});

it('tests unbalanced parens 02', () => {
	const input = 'this ( is a test) ( of balanced ( parens ())))';
	const rv = balanced(input);
	assert.equal(rv, false, `c2 rv is ${rv}`);
});

it('tests unbalanced parens 03', () => {
	const input = ' ) this ( is a test ( of balanced ( parens ())))';
	const rv = balanced(input);
	assert.equal(rv, false, `c3 rv is ${rv}`);
});


function isPalindrome(input){
	const stack = new Stack();
	const arr = [...input].filter((c) => {
		return c !== ' ';
	});
	arr.map((c) => {
		stack.push(c);
	});
	const reverse = arr.map(() => {
		return stack.pop();
	}).join('');
	const inputNoSpaces = arr.join('');

	console.log('test if [%s] = [%s]\n[%s]\n', inputNoSpaces, reverse, inputNoSpaces === reverse);
	return (inputNoSpaces === reverse);
}

it('tests if a string is a palindrome', () => {
	const rv = isPalindrome('taco cat');
	assert.equal(rv, true, `d1 rv is ${rv}`);
});

it('tests if a string is not a palindrome', () => {
	const rv = isPalindrome('my tacocat');
	assert.equal(rv, false, `d2 rv is ${rv}`);
});

it('tests if a string is a palindrome', () => {
	const rv = isPalindrome('a man a plan a canal panama');
	assert.equal(rv, true, `d3 rv is ${rv}`);
});
