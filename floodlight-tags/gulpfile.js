/*
  Update the config object if needed, especially the fileName.
*/
var gulp = require('gulp');
var eslint = require('gulp-eslint');
var template = require('gulp-template');
var uglify = require('gulp-uglify');
var pump = require('pump');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var args = require('yargs').argv;
var gutil = require('gulp-util');
var gulpSequence = require('gulp-sequence');
var fs = require('fs');
var wrap = require('gulp-wrap');
var prettify = require('gulp-js-prettify');

var validEnvironments = ['qa', 'prod'];
var validOutputs = ['floodlight2.0.js'];

var config = {
  date: new Date().toISOString(),
  pkg: JSON.parse(fs.readFileSync('package.json'))
};

gulp.task('js', () => {
  validOutputs.forEach(function(b) {
    return gulp.src(['./src/utils.js','./src/uParams.js','./src/floodlightSrc.js','./src/execute.js'])
      .pipe(concat(b))
      .pipe(template(config))
      .pipe(wrap({ src: './wrapper.js' }, config))
      .pipe(gulp.dest('./dist/src/'));
  });
});

var pretty = {
  'end_with_newline': false,
  'eol': '\n',
  'indent_level': 0,
  'indent_char': ' ',
  'indent_size': 2,
  'indent_with_tabs': false,
  'max_preserve_newlines': 2,
  'preserve_newlines': true,
  'wrap_line_length': 0,
  'brace_style': 'inline'
};

// Using js-beautify https://github.com/beautify-web/js-beautify
gulp.task('prettify', function() {
  validOutputs.forEach(function(i) {
    gulp.src('./dist/src/' + i)
      .pipe(prettify(pretty))
      .pipe(gulp.dest('./dist/dev'))
  });
});

gulp.task('lint', () => {
  return gulp.src(['./dist/dev/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('minify', (cb) => {
  validEnvironments.forEach(function(i) {
    gulp.src('./dist/src/**/*.js')
      .pipe(uglify({ output: { comments: 'some' } }))
      .pipe(gulp.dest('./dist/' + i))
  });
});

gulp.task('build', gulpSequence('js', 'prettify', 'lint', 'minify'));

gulp.task('watch', function() {
  connect.server({ port: 8080 });
  gulp.watch(['./src/**/*'], ['build']);
});

gulp.task('default', ['watch'])
