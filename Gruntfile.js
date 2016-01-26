module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shopify');

  grunt.initConfig({
    shopify: {
      options: {
        api_key: "",
        password: "",
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