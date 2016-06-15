monkeys.$inject = [ '$scope', '$http' ];

export default function monkeys( $scope, $http ) {
	$http
		.get( 'http://localhost:3000/api/monkeys' )
		.then( result => $scope.monkeys = result.data );
		
	$http
		.get( 'http://localhost:3000/api/monkeys/types' )
		.then( result => $scope.types = result.data );

	$scope.getType = function( typeId ) {
		if ( !$scope.types ) return 'monkey';
		
		const type = $scope.types.find( t => t.id === typeId );
		return type ? type.name : 'monkey';
	};
}