module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      watch: {
        options: {
          includePaths: ['bower_components/foundation/scss'],
          outputStyle: 'compressed'
        },
        files: {
          'css/app.min.css': 'scss/app.scss'
        }
      },

      build: {
        options: {
          includePaths: ['bower_components/foundation/scss'],
          outputStyle: 'compressed'
        },
        files: {
          'build/css/app.min.css': 'scss/app.scss'
        }
      }

    },

   uglify: {
      watch: {
        options: {
          mangle: false,
        },
        files: {
          'js/scripts.min.js': ['bower_components/foundation/js/vendor/jquery.js', 'bower_components/foundation/js/foundation.js'],
          'js/modernizr.min.js': ['bower_components/foundation/js/vendor/modernizr.js'],
          'js/app.min.js': ['js/app.js']
        }
      },

      build: {
        options: {
          mangle: false,
        },
        files: {
          'build/js/scripts.min.js': ['bower_components/foundation/js/vendor/jquery.js', 'bower_components/foundation/js/foundation.js'],
          'build/js/modernizr.min.js': ['bower_components/foundation/js/vendor/modernizr.js'],
          'build/js/app.min.min.js': ['js/app.js']
        }
      }
   },

    watch: {
      options: { nospawn: true },
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass:watch']
      },
      uglify: {
        files: ['bower_components/foundation/js/*', 'js/*'],
        tasks: 'uglify:watch'
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['sass:build','uglify:build']);
  grunt.registerTask('default', ['watch']);
}