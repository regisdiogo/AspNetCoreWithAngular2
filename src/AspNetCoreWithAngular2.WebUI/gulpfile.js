/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('clean', function () {
    return gulp.src('./wwwroot/lib', { read: false })
        .pipe(clean());
});

gulp.task('build', ['clean'], function () {
    gulp.src([
        'node_modules/angular2-in-memory-web-api/*.js',
        'node_modules/systemjs/dist/*.js',
        'node_modules/zone.js/dist/*.js',
        'node_modules/core-js/client/*.{js,map}',
        'node_modules/reflect-metadata/Reflect*.{js,map}'
    ]).pipe(gulp.dest('./wwwroot/lib'));

    gulp.src(['node_modules/jquery/dist/*.js'])
        .pipe(gulp.dest('./wwwroot/lib/jquery'));

    gulp.src(['node_modules/bootstrap/dist/**/*.*'])
        .pipe(gulp.dest('./wwwroot/lib/bootstrap'))

    gulp.src(['node_modules/@angular/**/*.{js,map}'])
        .pipe(gulp.dest('./wwwroot/lib/@angular'));

    gulp.src(['node_modules/rxjs/**/*.{js,map}'])
        .pipe(gulp.dest('./wwwroot/lib/rxjs'));
});