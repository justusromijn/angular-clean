module.exports = function(grunt) {
	grunt.initConfig({

		// grunt watch : check for changes in sass files
		// if changed, run compass
		watch: {
			files: ['app/directives/scss/*.scss'],
			tasks: ['compass']
		},

		// compass is invoked by watch to create new css
		// whenever the sass has changed
		compass: {
			dist: {
				options: {
					sassDir: 'app/directives/scss',
					cssDir: 'app/directives/css'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
};