const path = require('path')
//var HtmlWebpackPlugin = require('html-webpack-plugin')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer


module.exports = {
  configureWebpack: {
   plugins: [
    //   new HtmlWebpackPlugin({
    //   title: 'PRODUCTION ekatva site',
    //   template: '/public/index.html',
    //   filename: path.resolve(__dirname, 'dist/index.html')

    // }),
     new PrerenderSPAPlugin({
       staticDir: path.join(__dirname, 'dist'),  // Required - The path to the webpack-outputted app to prerender.
       routes: ['/', '/products/dhoti', '/products/kerala-saree', '/products/set-mundu','/products/khadi-kurta-for-men', '/contact', '/manufacturing'], // List of routes to prerender.
       renderer: new Renderer({
         inject: {
           foo: 'bar'
         },
         headless: false,
         renderAfterDocumentEvent: 'render-event'
       })
     })
   ]
  }
 }
