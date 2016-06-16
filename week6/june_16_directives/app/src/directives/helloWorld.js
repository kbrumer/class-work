export default function helloWorld() {
	return {
		restrict: 'A',
		scope: false,
		link($scope, element, attr){

			const passedAttr = attr.helloWorld;
			
			$scope.$watch(passedAttr, truthy => {
				if(truthy) element.addClass('foo');
				else element.removeClass('foo');
			});
		}
	};
}