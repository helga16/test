const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const spritesmith = require('gulp.spritesmith');
const rimraf = require('rimraf');
const rename = require ('gulp-rename');
const uglify = require ('gulp-uglify');
const concat = require ('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');




gulp.task('server', function() {
    browserSync.init({
        server: {
        	port: 9000,
            baseDir: "build"
        }
    });
        gulp.watch('build/**/*').on('change', browserSync.reload); 
      
});

gulp.task('styles:compile', function () {
  return gulp.src('sourse/styles/main.scss')
    
    .pipe(autoprefixer({
           overrideBrowserslist:  ['last 2 versions'],
            cascade: false
        }))
    .pipe(sass({outputstyle: 'compressed'}).on('error', sass.logError))
    .pipe (rename('main.min.css'))
    
    .pipe(gulp.dest('build/css'));
});

gulp.task('js', function() {
  return gulp.src([
    'node_modules/jquery/dist/jquery.min.js',
    'sourse/js/jquery-1.11.1.min.js',
    'sourse/js/jquery-ui.min.js',
    'sourse/js/slick.min.js',
    'sourse/js/jquery.easing.1.3.min.js',
    'sourse/js/jquery.event.drag.min.js',
    'sourse/js/jquery.mousewheel.min.js',
    'sourse/js/jquery.nbc.js',
    'sourse/js/main.js',


    ])
    
    .pipe(sourcemaps.init())
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/js'));
});
 

gulp.task('sprite', function (cb) {
  const spriteData = gulp.src('sourse/images/icons/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    imgPath: '../images/sprite.png',
    cssName: 'sprite.scss'
  }));


  spriteData.img.pipe(gulp.dest('build/images/'));
  spriteData.css.pipe(gulp.dest('sourse/styles/global/'));
  cb();
});

gulp.task('clean', function del(cb) {
  return rimraf('build', cb);
});

gulp.task('copy:fonts', function() {
  return gulp.src('./sourse/fonts/**/*.*')
    .pipe(gulp.dest('build/fonts'));
});

/* ------------ Copy images ------------- */
gulp.task('copy:images', function() {
  return gulp.src('./sourse/images/**/*.*')
    .pipe(gulp.dest('build/images'));
});

gulp.task('copy', gulp.parallel('copy:fonts', 'copy:images'));



gulp.task('templates:compile', function buildHTML() {
  return gulp.src('sourse/template/index.pug')
  .pipe(pug({
  	pretty: true
  }))
  .pipe(gulp.dest('build'))
});

gulp.task('watch', function() {
  gulp.watch('sourse/template/**/*.pug', gulp.series('templates:compile'));
  gulp.watch('sourse/styles/**/*.scss', gulp.series('styles:compile'));
  gulp.watch('sourse/js/**/*.js', gulp.series('js'));
});

gulp.task('default', gulp.series(
  'clean',
  gulp.parallel('templates:compile', 'styles:compile', 'js', 'sprite', 'copy'),
  gulp.parallel('watch', 'server')
  )
);


