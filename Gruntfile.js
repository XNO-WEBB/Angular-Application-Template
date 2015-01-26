module.exports = function(grunt) {
  grunt.initConfig({
    
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "assets/css/dependencies.min.css" : ["assets/libs/**/*.css"],
          "assets/css/main.min.css": ["assets/css/extras/**/*.less"]
        }
      }
    },

    uglify: {
      development: {
        options: {
          report: 'min',
          wrap: 'COMEON',
          mangle: false,
          preserveComments: false
        },
        files: {
          "assets/js/dependencies.min.js": ["assets/libs/AngularJS/angular.min.js", "assets/libs/**/*.js"],
          "assets/js/main.min.js": ["assets/js/extras/**/*.js"],
          "assets/js/application.min.js": ["app/**/*.js"]
        }
      }
    },

    watch: {
      scripts: {
        files: ["assets/js/**/*.js", "app/**/*.js"],
        tasks: ['newer:uglify:development'],
        options: {

        }
      },
      styles: {
        files: ["assets/css/**/*.css", "assets/css/**/*.less"],
        tasks: ['newer:less:development'],
        options: {

        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-newer');

  grunt.registerTask('default', ['watch']);
};