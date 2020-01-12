module.exports = function(grunt) {
    require("load-grunt-tasks")(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        babel: {
            options: {
                sourceMap: true,
                presets: ["@babel/preset-env"]
            },
            dist: {
                files: {
                    "./build/es5.js": "./main.js"
                }
            }
        },
        browserify: {
            main: {
                files: {
                    "./build/bundle.js": "./build/es5.js"
                }
            }
        },
        uglify: {
            build: {
                files: {
                    "./build/bundle.min.js": "./build/bundle.js"
                }
            }
        },
        watch: {
            scripts: {
                files: "main.js",
                tasks: ["babel", "browserify", "uglify"]
            }
        }
    });
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-browserify");
    grunt.registerTask("default", ["babel", "browserify", "uglify", "watch"]);
};
