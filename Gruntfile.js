module.exports = function(grunt) {

    // Config
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        hexo: {
            clean: {
                options: {
                    root: "/",
                    cliCmd: "clean"
                }
            },
            generate: {
                options: {
                    root: "/",
                    cliCmd: "generate"
                }
            }
        },

        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    src: ["public/**/*.html", "*.html"]
                }]
            }
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    src: ["public/**/*.css", "!*.css"],
                    ext: ".css"          
                }]
            }
        },

        uglify: {
            options: {
                mangle: false
            },
            target: {
                files: [{
                    expand: true,
                    src: "public/**/*.js"
                }]
            }

        },

        exec: {
            generate: "hexo generate",
            serve: "hexo serve",
            log_production: "echo Done! See 'public/' folder for output. hexo site has been cleaned and freshly generated, and html/css/js have been minified",
            log_build: "echo Building site...",
            clean: "hexo clean"
        }

    });

    // Plugins
    grunt.loadNpmTasks("grunt-hexo");
    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-exec");
    
    // Register tasks
    grunt.registerTask("production", ["hexo:generate", "htmlmin", "cssmin", "uglify", "exec:log_production"]);
    grunt.registerTask("build", ["hexo:generate", "exec:serve"]);
    grunt.registerTask("clean", ["exec:clean"]);

}