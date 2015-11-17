'use strict';

var gulp       = require('gulp');
var sass       = require('gulp-sass');
var concat     = require('gulp-concat');
var sassLint   = require('gulp-sass-lint');
var livereload = require('gulp-livereload');
var prefix 	   = require('gulp-autoprefixer');

/**
 * Wrap all our sass pipes 
 * for same functionality
 */
var compileSass = function(source, filename) {
	gulp.src(source)
	  .pipe(sass().on('error', sass.logError))
	  .pipe(concat(filename))
	  .pipe(prefix())
	  .pipe(gulp.dest('./public/css/'))
	  .pipe(livereload());
};

/**
 * Wrap all our javascript pipes 
 * for same functionality
 */
var compileJavascript = function(source, filename) {
	gulp.src(source)
	  .pipe(concat(filename))
	  .pipe(gulp.dest('./public/js/'))
	  .pipe(livereload());
};

/**
 * Default task
 */
gulp.task('default', [
	'css', 
	'javascriptDependencies', 
	'javascriptApplication',
], function(){

});

/**
 * Javascript Dependencies task
 */
gulp.task('javascriptDependencies', function() {
	compileJavascript([
			'./node_modules/angular/angular.js',
			'./node_modules/angular-route/angular-route.js',
			'./node_modules/angular-animate/angular-animate.js',
			'./node_modules/angular-bootstrap-affix/dist/angular-bootstrap-affix.js',
			'./node_modules/jquery/dist/jquery.js',
			'./node_modules/bootstrap/dist/js/bootstrap.js',
			// './resources/assets/libs/wow.js'
		],
		'dependencies.min.js'
	);
});

/**
 * Javascript Application task
 */
gulp.task('javascriptApplication', function() {
	compileJavascript([
			'./app/app.module.js',
			'./app/app.routes.js',
			'./app/config/**/*.js',
			'./app/**/*.js',
			'./resources/assets/js/**/*.js'
		],
		'main.min.js'
	);
});

/**
 * Css entire sheet task
 */
gulp.task('css', function() {
	compileSass([
		// './node_modules/animate.scss/vendor/assets/stylesheets/animate.scss', 
		'./resources/assets/scss/app.scss'
	], 
	'main.min.css');
});

/**
 * Watch files and gulp em task
 */
gulp.task('watch', function(){
	livereload.listen();
	
	gulp.watch('./resources/assets/scss/**/*.scss', [
		'css'
	]);

	gulp.watch('./resources/**/*.js', [
		'javascriptApplication'
	]);

	gulp.watch('./app/**/*.js', [
		'javascriptApplication'
	]);

	gulp.watch('./**/*.html').on('change', function(file) {
        livereload.changed(file.path);
    });
});