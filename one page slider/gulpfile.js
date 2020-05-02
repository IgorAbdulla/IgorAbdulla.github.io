var gulp = require("gulp"),
  sass = require("gulp-sass"),
  browserSync = require("browser-sync"),
  concat = require("gulp-concat"),
  uglify = require("gulp-uglify"),
  cleanCSS = require("gulp-clean-css"),
  rename = require("gulp-rename"),
  del = require("del"),
  // imagemin = require("gulp-imagemin"),
  // imgCompress = require("imagemin-jpeg-recompress"),
  autoprefixer = require("gulp-autoprefixer"),
  notify = require("gulp-notify"),
  // imageResize = require("gulp-image-resize"),
  // imageminJpegRecompress = require("imagemin-jpeg-recompress"),
  // imageminMozjpeg = require("imagemin-mozjpeg"),
  // imageminPngQuant = require("imagemin-pngquant"),
  reload = browserSync.reload;

gulp.task("browser-sync", async function() {
  browserSync({
    server: {
      baseDir: "app"
    },
    notify: false
  });
});


// Пользовательские скрипты проекта
gulp.task("js", async function() {
  return (
    gulp
      .src([
        "app/libs/lazyload.min.js",
        "app/libs/jq.js"
    ])
      .pipe(concat("scripts.min.js"))
      // .pipe(uglify()) // Минимизировать весь js (на выбор)
      .pipe(gulp.dest("app/js"))
      .pipe(browserSync.reload({ stream: true }))
  );
});


// style
gulp.task("scss", async function() {
  return gulp
    .src(["app/sass/main.scss"])
    .pipe(sass({ outputStyle: "expanded" }).on("error", notify.onError()))
    .pipe(autoprefixer(["last 15 versions"]))
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.stream());
});

gulp.task("watch", async function() {
  gulp.watch(["app/sass/**/*.scss"], gulp.parallel("scss")); // Наблюдение за style
  gulp.watch(["app/sass/_media.scss"], gulp.parallel("scss")); // Наблюдение за media
  // gulp.watch(["libs/**/*.js"], gulp.parallel("js"));
  gulp.watch(["app/js/**/*.js", "!app/js/scripts.min.js"], gulp.parallel("js"));
  gulp.watch("app/*.html").on("change", reload);
});

gulp.task("default", gulp.parallel("scss", "js", "browser-sync", "watch"));

// production
// gulp.task("removedist", async function() {
//   return del.sync("dist");
// });

// gulp.task("image_min", function() {
//   return gulp
//     .src("app/img/**/*")
//     .pipe(
//       imagemin(
//         [
//           imagemin.gifsicle({ interlaced: true }),
//           imageminJpegRecompress({
//             loops: 6,
//             min: 40,
//             max: 85,
//             quality: "low"
//           }),
//           imagemin.jpegtran({ progressive: true }),
//           imagemin.optipng(),
//           imageminPngQuant(),
//           imagemin.svgo([{ removeViewBox: false }, { minifyStyles: false }])
//         ],
//         { verbose: true }
//       )
//     )
//     .pipe(gulp.dest("dist/img"));
// });

// gulp.task("build_html_htaccess", () => {
//   return gulp.src(["app/*.html", "app/.htaccess"]).pipe(gulp.dest("dist"));
// });

// gulp.task("build_css", () => {
//   return gulp
//     .src(["app/css/main.css", "app/css/libs.min.css"])
//     .pipe(gulp.dest("dist/css"));
// });

// gulp.task("build_js", () => {
//   return gulp
//     .src(["app/js/common.js", "app/js/scripts.min.js"])
//     .pipe(gulp.dest("dist/js"));
// });

// gulp.task("build_fonts", () => {
//   return gulp.src(["app/fonts/**/*"]).pipe(gulp.dest("dist/fonts"));
// });

// gulp.task(
//   "build",
//   gulp.series(
//     "removedist",
//     "image_min",
//     "build_html_htaccess",
//     "sass",
//     "js",
//     "build_css",
//     "build_js",
//     "build_fonts"
//   )
// );

// gulp.task("large_img", function() {
//   return gulp
//     .src("app/img/_src/*.*")
//     .pipe(imageResize({ width: "100%" }))
//     .pipe(gulp.dest("app/img/large/"));
// });

// gulp.task("medium_img", function() {
//   return gulp
//     .src("app/img/_src/*.*")
//     .pipe(imageResize({ width: "50%" }))
//     .pipe(gulp.dest("app/img/medium/"));
// });

// gulp.task("small_img", function() {
//   return gulp
//     .src("app/img/_src/*.*")
//     .pipe(imageResize({ width: "25%" }))
//     .pipe(gulp.dest("app/img/small/"));
// });
