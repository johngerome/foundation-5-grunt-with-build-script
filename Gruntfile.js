module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

      sass: {
        watch: {
          options: {
            style: 'nested' // nested, compact, compressed, expanded.
          },
          files: {
            'assets/css/app.css': 'scss/app.scss'
          }
        },

         build: {
          options: {
            style: 'compressed'
          },
          files: {
            'assets/css/app.css': 'scss/app.scss'
          }
        },
      },

      uglify: {
        watch: {
          options: {
            mangle: false,
          },
          files: {
            'assets/js/app.min.js': ['js/*.js'],
          }
        },

        build: {
          options: {
            mangle: false,
          },
          files: {
            'assets/js/scripts.min.js': ['js/include/**/*.js'],
            'assets/js/app.min.js': ['js/*.js'],

            // Exclude Script here

          }
        }
      },

      watch: {
        options: {
          spawn: false 
        },
        grunt: { files: ['Gruntfile.js'] }, 

        sass: {
          files: ['scss/*.scss', 'scss/**/**/*.scss'],
          tasks: ['sass:watch']
        },
        uglify: {
          files: ['js/*.js'],
          tasks: ['uglify:watch']
        }
      }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['sass:build','uglify:build']);
  grunt.registerTask('default', ['watch']);
}