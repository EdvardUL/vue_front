const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer: {
    port: 8087 // Replace 3000 with the port number you want to use
  }
}