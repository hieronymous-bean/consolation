var gulp = require("gulp");
var del = require('del');

// delete all previously-created vendor css and js files //
gulp.task('cleanDirectory', () => {
    return del([
        './dist/*'
    ]);
});
// // // // //

// primary compile //
gulp.task("primaryCompile", function () {
    return gulp.src("lib/index.js")
    .pipe(gulp.dest("dist"));
  });
// // // // //

gulp.task('default', gulp.series('cleanDirectory', 'primaryCompile'));
