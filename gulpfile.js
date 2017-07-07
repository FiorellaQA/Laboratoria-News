var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');

var config = {
	source: './src/',
	dist: './public/'
};

var paths = {
	assets: "assets/",
	html: "**/*.html",
	sass: "scss/**/*.scss",
	mainSass: "scss/main.scss",
	mainJS : "js/app.js",
	js: "js/**/*.js",
	components: "js/components/**.js",
	vendor: "js/vendor/**.js",
	image: "img/*.png"
};

var sources = {
	assets: config.source + paths.assets,
	html: config.source + paths.html,
	sass: config.source + paths.assets + paths.sass,
	js: config.source + paths.assets + paths.js,
	vendor: config.source + paths.assets + paths.vendor,
	components: config.source + paths.assets + paths.components,
	rootSass: config.source + paths.assets + paths.mainSass,
	rootJS: config.source + paths.assets + paths.mainJS,
	img: config.source + paths.assets + paths.image
};


gulp.task('html', function (){
	gulp.src(sources.html).pipe(gulp.dest(config.dist));
});

gulp.task('img', function (){
	gulp.src(sources.img).pipe(gulp.dest(config.dist + paths.assets + "img"));
});

gulp.task("sass", function() {
    gulp.src(sources.rootSass)
        .pipe(sass({
        	outputStyle: "compressed"
        }).on("error", sass.logError))
        .pipe(gulp.dest(config.dist + paths.assets + "css"));
});

gulp.task("js", function() {
	gulp.src([sources.components,sources.rootJS])
		.pipe(concat("script.js"))
		.pipe(browserify())
		.pipe(rename("bundle.js"))

		.pipe(gulp.dest(config.dist + paths.assets + "js"));
});

gulp.task("sass-watch", ["sass"], function (done) {
   // browserSync.reload();
    //done();
});

gulp.task("js-watch", ["js"], function (done) {
    //browserSync.reload();
   // done();
});

gulp.task("html-watch", ["html"], function (done) {
    //browserSync.reload();
    //done();
});

gulp.task("img-watch", ["img"], function (done) {
	//browserSync.reload();
//	done();
});

gulp.task("serve", function() {
	browserSync.init({
		server: {
			baseDir: config.dist
		}
	});

	gulp.watch(sources.html, ["html-watch"]);
	gulp.watch(sources.sass, ["sass-watch"]);
	gulp.watch(sources.js, ["js-watch"]);
	gulp.watch(sources.img, ["img-watch"]);
});

gulp.task('run', ['html-watch', 'js-watch', 'sass-watch','img-watch']);