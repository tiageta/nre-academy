const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();

// compile scss into css
function style() {
  // get scss file
  return (
    gulp
      .src("app/scss/**/*.scss")
      // compile it into css
      .pipe(sass().on("error", sass.logError))
      // store compiled file
      .pipe(gulp.dest("app/css"))
      // stream changes to all browser
      .pipe(browserSync.stream())
  );
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "app",
    },
  });
  gulp.watch("app/scss/**/*.scss", style);
  gulp.watch("app/*.html").on("change", browserSync.reload);
  gulp.watch("app/scripts/**/*.js").on("change", browserSync.reload);
}

exports.style = style;
exports.watch = watch;
