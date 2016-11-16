const gulp = require('gulp'),
  plugins = require('gulp-load-plugins')(),
  webpack = require('webpack-stream'),
  browserSync = require('browser-sync').create();

const paths = {
  img: 'assets/*.{jpg,png}',
  pug: 'src/index.pug',
  pugWatch: 'src/**/*.pug',
  stylus: 'src/main.styl',
  stylusWatch: 'src/**/*.styl',
  js: 'src/main.js',
  fonts: 'bower_components/font-awesome/fonts/*.*',
  build: 'build/'
};

function getTask(task) {
  return require('./gulp-tasks/' + task)(gulp, plugins, paths);
}

// Get one .less file and render
gulp.task('css', getTask('css'));
gulp.task('html', getTask('html'));
gulp.task('js', getTask('js'));

gulp.task('copy', ['copy-fonts'], () =>
  gulp.src(paths.img)
    .pipe(gulp.dest(paths.build + 'img'))
);

gulp.task('copy-fonts', () =>
  gulp.src(paths.fonts)
    .pipe(gulp.dest(paths.build + 'fonts'))
);

gulp.task('css-watch', ['css'], reload());
gulp.task('html-watch', ['html'], reload());
gulp.task('js-watch', ['js'], reload());

function reload() {
  return function(done) {
    browserSync.reload();
    done();
  }
}

// Static server
gulp.task('serve', ['html'], function() {
  browserSync.init({
    server: {
      baseDir: 'build',
      index: 'index.html'
    },
    browser: 'google chrome'
  });

  gulp.watch(paths.stylusWatch, ['css-watch']);
  gulp.watch(paths.pugWatch, ['html-watch']);
  gulp.watch(paths.js, ['js-watch']);
  gulp.watch(paths.img, ['copy']);
});

// gulp.task('img', () =>
//   gulp.src(paths.img)
//     .pipe(plugins.responsive({
//       'welding.png': [
//         {
//           width: 575,
//           rename: 'bg-xs.jpg'
//         },{
//           width: 200 * 2,
//           rename: 'bg@2x.png'
//         }
//       ]
//     }))
//     .pipe(gulp.dest(paths.img))
// );

gulp.task('webpack', () =>
  gulp.src('src/entry.js')
    .pipe(webpack())
    .pipe(gulp.dest(paths.build + 'js'))
);

gulp.task('deploy', ['build'], () =>
  gulp.src(paths.build + '**/*')
    .pipe(plugins.ghPages())
);

// The default task (called when you run `gulp` from cli)
gulp.task('build', ['html', 'css', 'js', 'copy']);
gulp.task('dev', ['build', 'serve']);
gulp.task('default', ['dev']);
