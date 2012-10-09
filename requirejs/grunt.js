/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    lint: {
      files: ['grunt.js', 'src/**/*.js', 'spec/**/*.js']
    },
    jasmine: {
      amd: true,
      helpers: [ 'lib/require.js', 'src/config.js' ],
      specs : 'spec/**/*_spec.js',
      timeout : 10000,
      phantomjs : {
        'ignore-ssl-errors' : true
      }
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint jasmine'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {
        // Libraries
        Backbone: true,
        _: true,
        $: true,
        // Jasmine
        it: true,
        describe: true,
        beforeEach: true,
        expect: true,
        // Modules
        Person: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-jasmine-runner');

  // Default task.
  grunt.registerTask('default', 'lint jasmine');

};
