const gulp = require('gulp');
const zip = require('gulp-zip');

gulp.task('zip', () => {
    return gulp.src(['src/**/*', 'package*.json'], { base: '.' })
        .pipe(zip('archive.zip'))
        .pipe(gulp.dest('dist'))
});