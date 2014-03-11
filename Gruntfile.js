module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }        
      }
    },

  // JS COMPILATION
   uglify: {
      build: {
        options: {
          mangle: false,
          beautify: true,
        },
        files: {
          'js/scripts.js': ['bower_components/foundation/js/vendor/jquery.js', 'bower_components/foundation/js/foundation.js'],
          'js/modernizr.js': ['bower_components/foundation/js/vendor/modernizr.js'],
          'js/app.min.js': ['js/app.js']
        }
      }
   },

    watch: {
      options: { nospawn: true },
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      },
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['sass','uglify']);
  grunt.registerTask('default', ['build','watch']);
}