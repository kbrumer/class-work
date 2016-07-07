export default {
	template: `
		<p>your account is overdue by $0, 
			please pay immediately</p>
		<p>{{$ctrl.display}}
	`,
	bindings: {
		display: '<'
	}
};