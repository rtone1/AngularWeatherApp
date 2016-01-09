module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: 'public/javascripts/*.js',
        dest: 'public/javascripts/build/app.min.js'
      }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'public/stylesheets/build/main.css': 'public/stylesheets/styles.scss',
        }
      }
    },
    // Watch for changes!
    watch: {
      options: {
        livereload: true,
        spawn: false // Very important, don't miss this
      },
      scripts: {
        files: ['public/javascripts/build/app.min.js', 'public/javascripts/*.js'],
        tasks: ['uglify']
      },
      // images: {
      //   files: 'images/*.{png,jpg,gif}',
      //   tasks: ['imagemin']
      // },
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      }
    },
    // Inject changes into the browser!
    browserSync: {
          bsFiles: {
            src : [
            '**/*.scss',
            '**/*.js',
            '**/*.html'
            ]
          },
          options: {
            proxy: 'localhost:9000',
            watchTask: true
          }
        }

  }); // end of task

  // Load the plugin that provides the "uglify" and "sass" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  // Default task(s).
  grunt.registerTask('default', ['browserSync', 'watch']);

};
