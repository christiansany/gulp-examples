var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify');

gulp.task('js', function() {
	return gulp.src('src/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/'));
});

gulp.task('default', function() {
	gulp.watch('src/*.js', gulp.series(['js']));
});
