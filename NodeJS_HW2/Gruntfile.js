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
                files: [
                    {
                        "./build/server.js": "./server.js",
                        "./build/controllers.js": "./controllers/*.js",
                        "./build/routes.js": "./routes/*.js",
                        "./build/models.js": "./models/*.js"
                    }
                ]
            }
        },
        uglify: {
            build: {
                src: "./build/*.js",
                dest: "./build.min/build.min.js"
            }
        },
        watch: {
            scripts: {
                files: "./**/*.js",
                tasks: ["babel", "uglify"]
            }
        }
    });
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.registerTask("default", ["babel", "uglify", "watch"]);
};
