var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	postCSS = require('gulp-postcss'),
	autoprefixer = require('autoprefixer');

gulp.task('js', function() {
	return gulp.src('src/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/'));
});

gulp.task('scss', function() {
	return gulp.src('src/*.scss')
		.pipe(sass())
		.pipe(postCSS([
			autoprefixer()
		]))
		.pipe(gulp.dest('dist/'));
});

gulp.task('default', function() {
	gulp.watch('src/*.js', gulp.series(['js']));
	gulp.watch('src/*.scss', gulp.series(['scss']));
});
