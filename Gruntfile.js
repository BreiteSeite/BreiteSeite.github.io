module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    htmlmin: {
      options: {
        removeComments: true,
        collapseWhitespace: true,
        removeEmptyAttributes: true,
        removeCommentsFromCDATA: true,
        removeRedundantAttributes: true,
        collapseBooleanAttributes: true
      },
      files: {
        '_site/**/index.html': 'index2.html'
      },
    },
    cssmin: {
      combine: {
        files: {
          '_site/css/screen.css': ['_site/css/*.css']
        },
      }
    },
    shell: {
      build: {
        options: {
          stdout: true
        },
        command: 'jekyll build'
      },
      watch: {
        options: {
          stdout: true
        },
        command: 'jekyll -B -w serve'
      }
    },
    rsync: {
      options: {
        args: ["--verbose"],
        exclude: [".git*","*.scss","node_modules"],
        recursive: true
      },
      production: {
        options: {
          src: "_site/",
          dest: "breiteseite.net/public/blog/",
          host: "http@breiteseite.net",
          syncDestIgnoreExcl: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-rsync');

  grunt.registerTask('default', ['shell:build', 'cssmin', 'rsync:production']);
};