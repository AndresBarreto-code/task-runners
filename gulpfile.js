let gulp = require('gulp');
let babel = require('gulp-babel');
let uglify = require('gulp-uglify');
let stylus = require('gulp-stylus');

gulp.task('hola', async () => {
    console.log("Hello world!");
});

gulp.task('style', async () => {
    gulp.src('./src/css/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./build/css'));
});

gulp.task('mainminjs', async () => {
    gulp.src('./src/js/index.js')
    .pipe(babel({
        presets: [
            ['@babel/env', {modules: false}]
        ]
    }).on('error', (e) => console.log(e)))
    .pipe(uglify().on('error', (e) => console.log(e)))
    .pipe(gulp.dest('./build/js'));
});

gulp.task('varmainjs', function(){
    gulp.watch('./src/js/index.js',gulp.series('mainminjs'));
});

gulp.task('default', gulp.series('hola','style','mainminjs','varmainjs'), async () => {
    console.log("Fin");
});

