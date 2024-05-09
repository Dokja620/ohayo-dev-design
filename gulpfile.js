import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import * as sass from 'sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import groupMediaQueries from 'gulp-group-css-media-queries';

const sassCompiler = gulpSass(sass);

// Compile SASS to CSS
function style() {
    return gulp.src('./scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sassCompiler().on('error', sassCompiler.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(groupMediaQueries())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./src'));
}

// Watch for changes
function watch() {
    gulp.watch('./scss/**/*.scss', style);
}

// Default Gulp task
export default gulp.series(style, watch);