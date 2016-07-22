const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');


gulp.task( 'lint', () => {

	return gulp.src(['**/*.js','!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task( 'run-tests', () => {
	return gulp.src('./tests/**/*.js', { read: false } )
        .pipe( mocha({reporter: 'nyan'}) );
});

gulp.task( 'watch-js', function() {
	gulp.watch( [ '**/*.js', '!node_modules/**' ], [ 'test' ] );
});

gulp.task( 'test', [ 'lint', 'run-tests' ] );

gulp.task( 'default', [ 'test', 'watch-js' ] );

