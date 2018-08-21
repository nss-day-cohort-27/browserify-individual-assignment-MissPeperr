module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        watch: {
            scripts: {
                files: ["../index.html", "../scripts/**/*.js", "../styles/**/*.css", "!node_modules/**/*.js"],
                tasks: ["eslint", "browserify", "copy"],
                options: {
                    spawn: false,
                }
               
            },
            sass: {
                files: ["../styles/**/*.scss"],
                tasks: ["sass"]
              }
        },
        browserify: {
            options: {
                browserifyOptions: {
                    debug: true,
                    paths: ["../scripts", "./node_modules"],
                }
            },
            dist: {
                files: {
                    "../../dist/app.js": ["../scripts/main.js"]
                }
            }
        },
        uglify: {
            options: {
                banner: "/*! <%= pkg.name %> <%= grunt.template.today(yyyy-mm-dd) %> */"
            },
            build: {
                files: [{
                    expand: true,
                    cwd: "../../dist",
                    src: "app.js",
                    dest: "../../dist",
                    ext: ".min.js"
                }]
            }
        },
        sass: {
            dist: {
              files: {
                "../../dist/styles/main.css": "../styles/main.scss"
              }
            }
          },
        eslint: {
            src: ["../scripts/**/*.js", "!node_modules/**/*.js"]
        },
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: "..",
                    src: "./index.html",
                    dest: "../../dist/"
                }]
            }
        }
    });
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-eslint");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-browserify");
    grunt.registerTask("default", ["eslint", "browserify", "sass", "copy", "watch"]);
};
