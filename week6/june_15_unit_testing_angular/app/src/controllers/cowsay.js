// import { greet as greeter, foo } from './greeting';
import cowsay from 'cowsay-browser';

cowsayController.$inject = [ '$scope' ];

export default function cowsayController( $scope ){
	cowsay.list( ( err, types ) => $scope.types = types );

	console.log( '$scope has parent value', $scope.foo );
	// console.log( greeter( foo ) );
	
	$scope.type = 'default';
	$scope.text = 'I\'m a moooodule';
	$scope.method = 'say';
	
	$scope.cow = function( method, type, text ) {
		return cowsay[method]({
			text: text || '(I\'m speechless)',
			e : 'Oo',
			T : 'U ',
			f : type
		});
	};
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



