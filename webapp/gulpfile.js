var gulp = require('gulp');
var browserSync = require('browser-sync').create();


gulp.task('watch', function () {
//Watch CSS files  
  gulp.watch('./css/*.css',  function() {
  console.log('CSS changed');
  gulp.src('./css/*.css').pipe(browserSync.stream());
 });

//Watch html files
  gulp.watch('./*.html',  function() {
  console.log('HTML changed');
  gulp.src('./*.html').pipe(browserSync.stream());
 });

//Watch js files
  gulp.watch('./controller/*.js',  function() {
  console.log('JS changed');
  gulp.src('./controller/*.js').pipe(browserSync.stream());
 });

//Watch xml files
  gulp.watch('./view/*.xml',  function() {
  console.log('XML changed');
  gulp.src('./view/*.xml').pipe(browserSync.stream());
 });


//json files
  gulp.watch('./model/*.json',  function() {
  console.log('json changed');
  gulp.src('./model/*.json').pipe(browserSync.stream());
 });
});



gulp.task('init', function() {
    browserSync.init({                  
        injectChanges: true,
        server: {
            baseDir: "./"
        }
    });
});


gulp.task('default', ['init', 'watch']);

