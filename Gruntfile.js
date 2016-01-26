module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shopify');

  grunt.initConfig({
    shopify: {
      options: {
        api_key: "fe9cdc30048dd28e9f9f7823c3d2a961",
        password: "37e6bbafb58dfa5f0ab4352cfa34025d",
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