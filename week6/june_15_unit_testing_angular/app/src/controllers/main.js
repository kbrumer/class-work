main.$inject = [ '$scope' ];

export default function main( $scope ){
	$scope.obj = { foo: 'FOO' };
}



// export default function( module ) {
// 	module.controller( 'main', [ '$scope', function( banana ){
// 		cowsay.list( ( err, types ) => banana.types = types );
// 		console.log( greeter( foo ) );
// 		banana.type = 'default';
// 		banana.text = 'I\'m a moooodule';
// 		banana.method = 'say';
// 		banana.cow = function( method, type, text ) {
// 			return cowsay[method]({
// 				text: text || '(I\'m speechless)',
// 				e : 'Oo',
// 				T : 'U ',
// 				f : type
// 			});
// 		};
// 	}]);
// }



