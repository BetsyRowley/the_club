module.exports = function(grunt) {
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      uglify: {
        build: {
          src: ['client/scripts/*.js',
                'client/scripts/**/*.js'],
          dest: 'server/public/scripts/client.min.js'
        }
      },
      copy: {
        html: {
          expand: true,
          cwd: 'client/views',
          src: ['index.html',
                '**/*.html'],
          dest: 'server/public/views/'
        },
        css: {
          expand: true,
          cwd: 'client/styles',
          src: ['style.css'],
          dest: 'server/public/styles'
        },
        bootstrap: {
          expand: true,
          cwd: 'node_modules/bootstrap/dist',
          src: ['css/*.*',
                'fonts/*.*'],
          dest: 'server/public/vendors/bootstrap'
        },
        angular: {
          expand: true,
          cwd: 'node_modules/angular/',
          src: ['angular.js',
                'angular.min.js',
                'angular.min.js.map'],
          dest: 'server/public/vendors/angular'
        },
        angularRoute: {
          expand: true,
          cwd: 'node_modules/angular-route/',
          src: ['angular-route.js',
                'angular-route.min.js',
                'angular-route.min.js.map'],
          dest: 'server/public/vendors/angular-route'
        },
        angularSanitize: {
          expand: true,
          cwd: 'node_modules/angular-sanitize/',
          src: ['angular-sanitize.js',
                'angular-sanitize.min.js',
                'angular-sanitize.min.js.map'],
          dest: 'server/public/vendors/angular-sanitize'
      },
        angularUiBootstrap: {
          expand: true,
          cwd: 'node_modules/angular-ui-bootstrap/dist/',
          src: ['ui-bootstrap-csp.css',
                'ui-bootstrap.js'],
          dest: 'server/public/vendors/angular-ui-bootstrap'
        }
      },
      watch: {
        files: [
          'client/**/*.*'
        ],
        tasks: ['uglify', 'copy']
      }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['uglify', 'copy', 'watch']);
};
