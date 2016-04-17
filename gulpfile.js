var outPath = "dist/";
var srcParh = "src/";
var gulp = require('gulp');
var cache = require('gulp-cache');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var clean = require('gulp-clean');
var sourcemaps = require('gulp-sourcemaps');
var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');
var runSequence = require('gulp-run-sequence');

gulp.task("clean", function () {
    gulp.src("rev/").pipe(clean());
    gulp.src(outPath)
        .pipe(clean());
});

gulp.task("build", function () {
    gulp.src('src/**/*.png').pipe(gulp.dest(outPath));
    gulp.src('src/**/*.gif').pipe(gulp.dest(outPath));
    gulp.src('src/**/*.tff').pipe(gulp.dest(outPath));
    gulp.src('src/app/**/*.*').pipe(gulp.dest(outPath + "app/"));

    gulp.src(['src/assets/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(uglify().on('error', gutil.log))
        .pipe(rev())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest(outPath + "assets/"))
        .pipe(rev.manifest())
        .pipe(gulp.dest('rev/js'));

    gulp.src('src/assets/**/*.css')
        .pipe(sourcemaps.init())
        .pipe(rev())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest(outPath + "assets/"))
        .pipe(rev.manifest())
        .pipe(gulp.dest("rev/css"));
});

gulp.task('replace', function () {
    var manifest = gulp.src("rev/**/rev-manifest.json");
    gulp.src('src/html/*.html')
        .pipe(revReplace({manifest: manifest}))
        .pipe(gulp.dest(outPath + "/html"));
});

gulp.task("temp", function () {

});

// npm install --verbose  --registry http://registry.cnpmjs.org