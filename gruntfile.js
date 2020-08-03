module.exports = (grunt) => {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        author: "Andres",
        uglify: {
            dist: {
               files: {
                   './build/js/registro.min.js':[
                       './src/js/registro.js'
                   ]
               } 
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['uglify']);
}