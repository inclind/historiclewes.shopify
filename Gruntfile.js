module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shopify');

  grunt.initConfig({
    keys: grunt.file.readJSON('keys.json'),
    shopify: {
      options: {
        api_key: "<%= keys.api_key %>",
        password: "<%= keys.password %>",
        url: "historic-lewes.myshopify.com",
        base: "shop/"
      }
    },
    watch: {
      shopify: {
        files: ["shop/**"],
        tasks: ["shopify"]
      }
    }
  })

}