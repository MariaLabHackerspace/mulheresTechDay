var gulp = require('gulp'),
	less = require('gulp-less'),
	watch = require('gulp-watch');

gulp.task('less', function () {
 return gulp.src('./less/**/*.less')
   .pipe(less())
   .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', function () {
	var path = [];
	path.push('./less/**/*.less');
	gulp.watch(path,['less']);
});