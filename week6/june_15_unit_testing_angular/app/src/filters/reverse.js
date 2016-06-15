export default function reverse() {
	return function(text) {
		return (text||'').split('').reverse().join('');
	};
}