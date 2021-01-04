const   gulp        = require('gulp'                ),
        fileinclude = require('gulp-file-include'   ),
        less        = require('gulp-less'           ),
        babel       = require('gulp-babel'          ),
        sourcemaps  = require('gulp-sourcemaps'     ),
        uglify      = require('gulp-uglify'         ),
        del         = require('del'                 ),
        cssmin      = require('gulp-cssmin'         ),
        browserSync = require('browser-sync'        ).create();

gulp.task('build_HTML', function (done) {
    del(['./dist/*.html']);
    gulp.src('src/*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: 'src/include/',
            indent: true
        }))
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.stream());
    done();
});

gulp.task('build_CSS', function (done) {
    del(['./dist/css/*']);
    gulp.src('./src/less/*')
        .pipe(less())
        .pipe(cssmin())
        .pipe(gulp.dest('./dist/css/'))
        .pipe(browserSync.stream());
    done();
});

gulp.task('build_JS', function(done){
    del(['./dist/js/*']);
    gulp.src('./src/js/*')
        .pipe(babel({
            minified: true,
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'))
        .pipe(browserSync.stream());
    done();
});

gulp.task('build_IMG', function(done){
    del(['./dist/img/*']);
    gulp.src('src/img/*')
        .pipe(gulp.dest('./dist/img/'))
        .pipe(browserSync.stream());
    done();
});

gulp.task('browser_sync', function() {
    browserSync.init({
        server: {
            baseDir: "./dist/"
        },
        port: 3000
    });
});

gulp.task('watch', function(){
    gulp.watch('src/*.html',      gulp.series('build_HTML'));
    gulp.watch('src/include/*',   gulp.series('build_HTML'));
    gulp.watch('src/less/*',      gulp.series('build_CSS'));
    gulp.watch('src/js/*',        gulp.series('build_JS'));
    gulp.watch('src/img/*',       gulp.series('build_IMG'));
});

gulp.task('default', gulp.parallel('build_HTML', 'build_CSS', 'build_JS', 'build_IMG', 'browser_sync', 'watch'));