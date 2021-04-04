const gulp = require('gulp')
const sass = require('gulp-sass')
const include = require('gulp-file-include')
const del = require('del')
const concat = require('gulp-concat')
const autoprefixer = require('gulp-autoprefixer')
const sync = require('browser-sync').create()
const imageResize = require('gulp-image-resize');
const imagemin = require('gulp-imagemin')


function images() {
  return gulp.src(['src/images/*.{gif,jpg,png,svg}'])
    .pipe(gulp.dest('dist/images'))
};

function imageMin(){
    return gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
}
 
function resize() {
  return gulp.src('src/images/{logo.png, star.png}')
    .pipe(imageResize({
      width : 150,
      height : 150,
      crop : true,
      upscale : false,
      imageMagick: true
    }))
    .pipe(gulp.dest('dist/images'));
};

function html() {
  return gulp.src('src/**.html')
    .pipe(include({
      prefix: '@@'
    }))
    .pipe(gulp.dest('dist'))
}

function pages(){
  return gulp.src('src/views/**.html')
    .pipe(include({
      prefix: '@@'
    }))
    .pipe(gulp.dest('dist/views'))
  }

function fonts(){
  return gulp.src('src/fonts/**')
    .pipe(gulp.dest('dist/fonts'))
  }  



function scss() {
  return gulp.src('src/scss/**.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      overrideBrowserslist:  ['last 2 versions']
  }))
    .pipe(concat('index.css'))
    .pipe(gulp.dest('dist'))
}

function clear() {
  return del('dist')
}


function serve() {
  sync.init({
    server: './dist'
  })

  gulp.watch('src/index.html', gulp.series(html)).on('change', sync.reload)
  gulp.watch('src/views/**.html', gulp.series(pages)).on('change', sync.reload)
  gulp.watch('src/images/*.{gif,jpg,png,svg}', gulp.series(images)).on('change', sync.reload);
  gulp.watch('src/scss/**.scss', gulp.series(scss)).on('change', sync.reload)
}



exports.build = gulp.series(clear, scss, html, pages, images, resize, imageMin, fonts)
exports.serve = gulp.series(clear, scss, html, pages, fonts, images, resize, imageMin, serve)
exports.clear = clear