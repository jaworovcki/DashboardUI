var gulp = require("gulp");
var sass = require("gulp-sass"),
    cssnano = require("gulp-cssnano"),
    autoprefixer = require('gulp-autoprefixer'),

    imagemin = require('gulp-imagemin'),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    rename = require("gulp-rename");

gulp.task("html", function () {
    return gulp.src("app / *. html")
        .pipe(gulp.dest("dist"));
});

gulp.task("sass", function () {
    return gulp.src("app / sass / *.sass")
        .pipe(concat('styles.sass'))
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest("dist / css"));
});

gulp.task("scripts", function () {
    return gulp.src("app / js / *. js")
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))

        .pipe(gulp.dest("dist / js"));
});

gulp.task('imgs', function () {
    return gulp.src("app / img /*.+ (jpg | jpeg | png | gif)")
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            interlaced: true
        }))
        .pipe(gulp.dest("dist / images"))
});

gulp.task("watch", function () {
    gulp.watch("app / *. html", ["html"]);
    gulp.watch("app / js / *. js", ["scripts"]);
    gulp.watch("app / sass / *. sass", ["sass"]);
    gulp.watch("app / img /*.+ (jpg | jpeg | png | gif)", ["imgs"]);
});

gulp.task("default", ["html", "sass", "scripts", "imgs", "watch"]);
