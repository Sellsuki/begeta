const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const sass = require('gulp-sass')
const rename = require('gulp-rename')

gulp.task('build', function() {
  return gulp.src('./src/build.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(
      rename({
        basename: '',
        prefix: 'begeta',
        suffix: '',
        extname: '.css'
      })
    )
    .pipe(gulp.dest('./dist/'))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 2 versions']}))
    .pipe(
      rename({
        basename: '',
        prefix: 'begeta',
        suffix: '.min',
        extname: '.css'
      })
    )
    .pipe(gulp.dest('./dist/'))
})