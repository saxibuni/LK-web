'use strict';

// gulp and gulp plugins
var gulp         = require('gulp');
var clean        = require('gulp-clean');
var cssmin       = require('gulp-minify-css');
var htmlmin      = require('gulp-minify-html');
var uglify       = require('gulp-uglify');
var jsonminify   = require('gulp-jsonminify');
var replace      = require('gulp-batch-replace');
var rename       = require('gulp-rename');
var shell        = require('gulp-shell');
var spritesmith  = require('gulp.spritesmith');
var gutil        = require('gulp-util');
var concat       = require('gulp-concat');
var addsrc       = require('gulp-add-src');
var gulpif       = require('gulp-if');
var watch        = require('gulp-watch');
var sass         = require('gulp-sass');
var flatten      = require('gulp-flatten');
var htmlReplace  = require('gulp-html-replace');

var src_js_lib_path     = 'src/lib/js/';
var src_css_lib_path    = 'src/lib/css/';
var src_scss_path       = 'src/scss/';
var build_html_path     = 'build/html/';
var build_js_path       = 'build/js/';
var build_css_path      = 'build/css/';

gulp.task('default', function () {
    var gulpTasks = Object.keys(gulp.tasks);
    var colors    = gutil.colors;
    var log       = gutil.log;

    colors.enabled = true;
    colors.supportsColor = true;

    log(colors.cyan('-- All Tasks --'));
    for (var i = 0; i < gulpTasks.length; i++) {
        log('*  ', colors.green(gulpTasks[i]));
    }
});

gulp.task('clean', function () {
    return  gulp.src([src_js_lib_path, src_css_lib_path, 'build/*'], {read: false})
                .pipe(clean());
});

gulp.task('prepare', ['clean'], function () {
    gulp.src([
            './bower_components/bootstrap/dist/css/bootstrap.min.css',
            './bower_components/datetimepicker/jquery.datetimepicker.css'
        ])
        .pipe(gulp.dest(src_css_lib_path));

    gulp.src([
            './bower_components/Modernizr/modernizr.custom.js',
            './bower_components/jquery/dist/jquery.min.js',
            './bower_components/bootstrap/dist/js/bootstrap.min.js',
            './bower_components/html5shiv/dist/html5shiv.min.js',
            './bower_components/datetimepicker/jquery.datetimepicker.js',
            './bower_components/fastclick/lib/fastclick.js',
            './bower_components/PubSubJS/src/pubsub.js'
        ])
        .pipe(gulp.dest(src_js_lib_path));

    gulp.src(['src/img/*'])
        .pipe(gulp.dest('build/img/'));

    gulp.src(['src/fonts/*'])
        .pipe(gulp.dest('build/fonts/'));

    gulp.src(['src/config/*'])
        .pipe(gulp.dest('build/config/'));

    gulp.src(['src/customize/*'])
        .pipe(gulp.dest('build/customize/'));

});

gulp.task('build', function () {
    gulp.src([
            'src/lib/js/modernizr.custom.js',
            'src/lib/js/jquery.min.js',
            'src/lib/js/bootstrap.min.js',
            'src/lib/js/fastclick.js',
            'src/lib/js/pubsub.js',
            'src/js/plugins/IMDialog.js',
            'src/js/plugins/*.js',
            'src/js/bet/**/*.js',
            'src/js/components/*.js',
            'src/js/modules/*.js',
            'src/js/util/*.js',
            'src/js/pages/Bet.js'
        ])
        .pipe(concat('bet.js'))
        .pipe(gulp.dest('build/js'));

    gulp.src('src/scss/libs/BetLib.scss')
        .pipe(sass())
        .pipe(flatten())
        .pipe(addsrc.prepend(['src/lib/css/bootstrap.min.css']))
        .pipe(concat('bet.css'))
        .pipe(gulp.dest('build/css/'));

    gulp.src('src/html/bet.html')
        .pipe(htmlReplace({
            'css': '../css/bet.css',
            'js': '../js/bet.js'
        }))
        .pipe(gulp.dest(build_html_path));

    gulp.src([
            'src/lib/js/jquery.min.js',
            'src/lib/js/bootstrap.min.js',
            'src/lib/js/jquery.datetimepicker.js',
            'src/lib/js/fastclick.js',
            'src/js/plugins/IMDialog.js',
            'src/js/plugins/IMCheckBox.js',
            'src/js/plugins/IMButton.js',
            'src/js/plugins/IMDatetimepicker.js',
            'src/js/util/*.js',
            'src/js/lotteryTrend/*.js',
            'src/js/pages/TrendView.js'
        ])
        .pipe(concat('trendView.js'))
        .pipe(gulp.dest('build/js'));

    gulp.src('src/scss/libs/TrendViewLib.scss')
        .pipe(sass())
        .pipe(flatten())
        .pipe(addsrc.prepend(['src/lib/css/bootstrap.min.css', 'src/lib/css/jquery.datetimepicker.css']))
        .pipe(concat('trendView.css'))
        .pipe(gulp.dest('build/css/'));

    gulp.src('src/html/trendView.html')
        .pipe(htmlReplace({
            'css': '../css/trendView.css',
            'js': '../js/trendView.js'
        }))
        .pipe(gulp.dest(build_html_path));

    gulp.src([
            'src/lib/js/jquery.min.js',
            'src/lib/js/bootstrap.min.js',
            'src/lib/js/fastclick.js',
            'src/lib/js/jquery.datetimepicker.js',
            'src/lib/js/fastclick.js',
            'src/js/plugins/IMDialog.js',
            'src/js/plugins/*.js',
            'src/js/util/*.js',
            'src/js/components/BetOrderDetail.js',
            'src/js/components/NoticeDialog.js',
            'src/js/bet/ssc/LT_BetConfig.js',
            'src/js/bet/11x5/HL11x5_BetConfig.js',
            'src/js/bet/k3/K3_BetConfig.js',
            'src/js/bet/3d/3D_BetConfig.js',
            'src/js/bet/OriginalItem.js',
            'src/js/bet/local.js',
            'src/js/bet/GlobalVariable.js',
            //'src/js/components/BettingRecords.js',
            'src/js/components/ChaseOrderDetail.js',
            'src/js/pages/RecordsQuery.js'
        ])
        .pipe(concat('recordsQuery.js'))
        .pipe(gulp.dest('build/js'));

    //要保证dialog.scss在BetOrderDetail.scss和ChaseOrderDetail.scss后面加载，
    //这个涉及到优先级的问题, 不然对话框没法显示
    gulp.src('src/scss/libs/RecordsQueryLib.scss')
        .pipe(sass())
        .pipe(flatten())
        .pipe(addsrc.prepend(['src/lib/css/bootstrap.min.css', 'src/lib/css/jquery.datetimepicker.css']))
        .pipe(concat('recordsQuery.css'))
        .pipe(gulp.dest('build/css/'));

    gulp.src('src/html/recordsQuery.html')
        .pipe(htmlReplace({
            'css': '../css/recordsQuery.css',
            'js': '../js/recordsQuery.js'
        }))
        .pipe(gulp.dest(build_html_path));

});

gulp.task('minify', function() {
    gulp.src('build/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));

    gulp.src('build/html/*.html')
        .pipe(htmlmin())
        .pipe(gulp.dest('build/html'));

    gulp.src('build/css/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('build/css'));
});



