module.exports = function(grunt){
     grunt.initConfig({
         cssmin : {
             dist : {
                 files : {
                     'dist/css/style.min.css' : ['css/*.css']                    
                 }
             }
         },
         watch : {
   dist : {
       files : ['css/*.css'],
       tasks : ['cssmin']
   }
},
jshint : {
dist: {
  src: ['js/**/*.js']
}
},
concat : {
  dist: {
    src: ['js/**/*.js'],
    dest: 'dist/js/scripts.js'
  }
},
uglify : {
scripts : {
  src:['dist/js/scripts.js'],
  dest: 'dist/js/scripts.min.js'
}
}
     });
    
     grunt.loadNpmTasks('grunt-contrib-cssmin');
     grunt.loadNpmTasks('grunt-contrib-watch');
     grunt.loadNpmTasks('grunt-contrib-jshint');
     grunt.loadNpmTasks('grunt-contrib-concat');
     grunt.loadNpmTasks('grunt-contrib-uglify');


     grunt.registerTask('default', ['cssmin', 'watch', 'jshint', 'concat','uglify']);
     
  }