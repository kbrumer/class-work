export default function simple() {
	return {
		restrict: 'E',
		scope: {},
		require: {
			parent: '^main'
		},
		controller(){

			this.$onInit = function() {
				console.log(this.parent);
			};
			
		}
	};
}