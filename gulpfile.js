const { src, dest } = require('gulp');

const build = () => {
    return src('src/**/*.js')
        .pipe(dest('output/'));
}

exports.default = build;