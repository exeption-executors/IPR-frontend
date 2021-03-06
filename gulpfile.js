"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var csscomb = require('gulp-csscomb');

server.init({
    server: "source/",
    notify: false,
    open: true,
    cors: true,
    ui: false,
    ghostMode: false
});

gulp.task("style", function() {
    gulp.src("source/sass/style.scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(csscomb())
        .pipe(gulp.dest("source/css"))
        .pipe(server.stream());
});

gulp.task("serve", ["style"], function() {
    gulp.watch("source/sass/**/*.scss", ["style"]);
    gulp.watch("source/css/style.css").on("change", server.reload);
    gulp.watch("*.html").on("change", server.reload);
});
