module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src:  ['src/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        mangle: true,
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    sass: {
      dev: {
        options: {
          style: 'expanded',
        },
        src: ['src/scss/style.scss'],
        dest: 'dist/style.css'
      },
      prod: {
        options: {
          style: 'compressed',
        },
        src: '<%= sass.dev.src %>',
        dest: '<%= sass.dev.dest %>',
      }

    },

    jshint: {
        all: ['Gruntfile.js', 'src/**/*.js'],
    },

    clean: ['dist/*'],


    watch: {
      scss: {
        files: ['src/scss/**/*.scss'],
        tasks: [
          'sass:dev'
        ]
      },
      js: {
        files: [
          '<%= jshint.all %>'
        ],
        tasks: [
          'jshint',
          'concat',
        ]
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');


  // Default task(s).
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('develop', ['clean', 'concat', 'sass:dev' ]);
  grunt.registerTask('production', ['clean', 'concat', 'uglify', 'sass:prod' ]);


};
