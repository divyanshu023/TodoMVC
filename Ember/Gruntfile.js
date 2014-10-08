module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	
    'http-server': {
	   'dev': {
	       // the server root directory
	       root: "",
	       port: 8282,
	       // port: function() { return 8282; }
	       host: "127.0.0.1",
	       // cache: <sec>,
// 	       showDir : true,
// 	       autoIndex: true,
	       // server default file extension
	       // ext: "html",
	       // run in parallel with other tasks
	       // runInBackground: true|false
	   }
     }
  });
  
  grunt.loadNpmTasks('grunt-http-server');
  // Default task(s).
  grunt.registerTask('default', ['http-server:dev']);

};