'use strict';

const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');

gulp.task('build', gulpSequence('scripts', 'styles', 'hbs', 'assets'))