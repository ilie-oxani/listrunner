module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        paths: {
            images: 'static/img/',
            js: 'static/js/',
            css: 'static/css/'
        },
        concat: {
            dist: {
                src: [ '<%= paths.js %>_src/jquery.js', '<%= paths.js %>_src/*.js', ],
                dest: '<%= paths.js %><%= pkg.name %>-<%= pkg.version %>.js',
            }
        },
        uglify: {
            build: {
                src: '<%= paths.js %><%= pkg.name %>-<%= pkg.version %>.js',
                dest: '<%= paths.js %><%= pkg.name %>-<%= pkg.version %>.js'
            }
        },
        cssmin: {
          combine: {
            files: {
              '<%=  paths.css %><%= pkg.name %>-<%= pkg.version %>.css':
              [ '<%=  paths.css %>_src/**/*.css']
            }
          },
        },
        imagemin: {
            options: {cache: false, optimizationLevel: 0},
            dynamic: {
                files: [{
                    expand: true,
                    cwd: '<%=  paths.images %>_src/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: '<%=  paths.images %>'
                }]
            }
        },
        shell: {
            jekyll: {
                command: "jekyll serve --baseurl '' "
            }
        },
        convert: {
            config: {
                files: [{
                    src: ['package.json'],
                    dest: '_config.yml'
                }]
            }
        },
        watch: {
            config: {
                files: [ 'package.json' ],
                tasks: [ 'convert:config',],
                options: {
                    interrupt: true,
                }
            },
            css: {
                files: [
                    '<%=  paths.css %>/**/*.css',
                ],
                tasks: ['cssmin', 'shell:jekyll'],
                options: {
                  interrupt: true,
                },
            },
            js: {
                files: [
                    '<%= paths.js %>/**/*.js',
                ],
                tasks: ['concat', 'uglify', 'shell:jekyll'],
                options: {
                  interrupt: true,
                },
            },
            images: {
                files: [
                    '<%=  paths.images %>/**/*.{png,jpg,gif}',
                ],
                tasks: ['imagemin', 'shell:jekyll'],
                options: {
                  interrupt: true,
                },
            },
            jekyll: {
                files: [
                    '_config.yml',
                    '**/*.markdown',
                    '**/*.html',
                    '!_site/**/*.html',
                    '!_site/**/*.markdown',
                ],
                tasks: ['shell:jekyll',],
                options: {
                    interrupt: true,
                    atBegin: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-convert');

    grunt.registerTask('default', ['convert:config', 'static', 'watch']);
    grunt.registerTask('config', [ 'convert:config' ]);
    grunt.registerTask('static', [
                       'concat',
                       'cssmin',
                       'uglify',
                       // 'imagemin',
                       ]);
};
