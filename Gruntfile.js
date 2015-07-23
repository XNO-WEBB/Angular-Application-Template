module.exports = function(grunt)
{
    grunt.initConfig(
    {

        less:
        {
            development:
            {
                options:
                {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files:
                {
                    "public/css/dependencies.min.css": [
                        "resources/assets/libs/**/*.css"
                    ],
                    "public/css/main.min.css": [
                        "resources/assets/less/app.less",
                        // Comment out for less imports
                        "resources/assets/less/**/*.less"
                    ]
                }
            }
        },

        uglify:
        {
            development:
            {
                options:
                {
                    mangle: false,
                    preserveComments: false,
                    beautify: true
                },
                files:
                {
                    "public/js/dependencies.min.js": [
                        "resources/assets/libs/AngularJS/angular.min.js",
                        "resources/assets/libs/**/*.js"
                    ],
                    "public/js/application.min.js": [
                        "app/app.module.js",
                        "config/**/*.js",
                        "app/**/*.js"
                    ],
                    "public/js/main.min.js": [
                        "resources/assets/js/**/*.js"
                    ]
                }
            }
        },

        imagemin:
        {
            compress:
            {
                files: [
                    {
                        expand: true,
                        cwd: 'resources/assets/img/',
                        src: ['**/*.{png,jpg,gif}'],
                        dest: 'public/img/'
                }]
            }
        },

        watch:
        {
            options:
            {
                livereload: true
            },
            scripts:
            {
                files: [
                    "resources/assets/js/**/*.js",
                    "app/**/*.js"
                ],
                tasks: ['newer:uglify:development'],
                options:
                {

                }
            },
            styles:
            {
                files: [
                    "resources/assets/css/**/*.css",
                    "resources/assets/css/**/*.less"
                ],
                tasks: ['newer:less:development'],
                options:
                {

                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-newer');

    grunt.registerTask('default', ['less', 'uglify', 'watch']);
    grunt.registerTask('all', ['less', 'uglify', 'imagemin']);
};
