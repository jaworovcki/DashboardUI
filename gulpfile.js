var gulp = require("gulp");
var sass = require("gulp-sass")(require('sass'));;
var cssnano = require("gulp-cssnano");
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");

gulp.task("html", function () {
    return gulp.src("app/*.html")
        .pipe(gulp.dest("dist"));
});

gulp.task("sass", function () {
    return gulp.src("app/sass/*.sass")
        .pipe(concat('styles.sass'))
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest("dist/css"));
});

gulp.task("scripts", function () {
    return gulp.src("app/js/*.js")
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest("dist/js"));
});

gulp.task('imgs', function () {
    return gulp.src("app/img/*.{jpg,jpeg,png,gif}")
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            interlaced: true
        }))
        .pipe(gulp.dest("dist/images"));
});

gulp.task("watch", function () {
    gulp.watch("app/*.html", gulp.series("html"));
    gulp.watch("app/js/*.js", gulp.series("scripts"));
    gulp.watch("app/sass/*.sass", gulp.series("sass"));
    gulp.watch("app/img/*.{jpg,jpeg,png,gif}", gulp.series("imgs"));
});

gulp.task("default", gulp.series("html", "sass", "scripts", "imgs", "watch"));
