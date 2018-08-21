//
//
//
//  Copyright
//
//
//

const browserify = require('browserify')
const gulp = require('gulp')
const path = require('path')
const del = require('del')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const uglify = require('gulp-uglify-es').default
const babelify = require('babelify')

const BuildPath = path.join(__dirname, './build/')
const SrcPath = path.join(__dirname, './lib')
const Es6Path = path.join(__dirname, './es6')
const LibName = 'webz.min.js'

gulp.task('build', () => {
  // set up the browserify instance on a task basis
  const b = browserify({
    entries: `${SrcPath}/index.js`,
    debug: true,
    transform: [
      babelify.configure({
        presets: ['es2015']
      })
    ]
  })

  return (
    b
      .bundle()
      .pipe(source(LibName))
      .pipe(buffer())
      // Add transformation tasks to the pipeline here
      .pipe(uglify())
      .pipe(gulp.dest(BuildPath))
  )
})

gulp.task('default', ['build'])
