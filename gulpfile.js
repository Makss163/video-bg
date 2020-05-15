
const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();


 // Static server
function bs() {
    serveSass();
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    watch("./*.html").on('change', browserSync.reload);
    watch("./js/*.js").on('change', browserSync.reload);
};
 

exports.serve = bs;