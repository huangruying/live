const path = require("path");

function resolve(dir) {
    return path.join(__dirname, dir);
}

// const CompressionWebpackPlugin = require('compression-webpack-plugin') // 代码压缩
// const TerserPlugin = require('terser-webpack-plugin');
// const isProd = process.env.NODE_ENV === 'production'

// 引入等比适配插件
const px2rem = require('postcss-px2rem')

// 配置基本大小
const postcss = px2rem({
  // 基准大小 baseSize，需要和rem.js中相同
  remUnit: 16
})

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'? './': '/',
    assetsDir: process.env.NODE_ENV === 'production'? 'assets': '',
    productionSourceMap:false,

    lintOnSave: true,
      css: {
        loaderOptions: {
          postcss: {
            plugins: [
              postcss
            ]
          }
        }
      },
    
    chainWebpack: config => {
        config.resolve.alias
            .set("@", resolve("src"))
            .set("utils", resolve("src/utils"));
        
            // config.module // 压缩图片
            //     .rule('images')
            //     .use('image-webpack-loader')
            //     .loader('image-webpack-loader')
            //     .options({
            //         //{ bypassOnDebug: true }
            //         mozjpeg: { progressive: true, quality: 65 }, //// Compress JPEG images
            //         optipng: { enabled: false },		// Compress PNG images
            //         pngquant: { quality: [0.65, 0.9], speed: 4 },   // Compress PNG images
            //         gifsicle: { interlaced: false },		// Compress SVG images
            //         webp: { quality: 75 }
            //     }).end()
    },
    configureWebpack: config => {
        // if (isProd) {
        //   // 配置webpack 压缩
        //     config.plugins.push(
        //         new CompressionWebpackPlugin({
        //             test: /\.js$|\.html$|\.css$/,
        //             // 超过4kb压缩
        //             threshold: 4096,
        //             deleteOriginalAssets:false
        //         })
        //     );
        //     config.plugins.push(
        //         // new TerserPlugin({
        //         //     // 生产环境自动删除console
        //         //     cache: true, // 是否缓存
        //         //     sourceMap: false,
        //         //     parallel: true,
        //         //     terserOptions:{
        //         //         compress: {
        //         //             drop_debugger: true,
        //         //             drop_console: true,
        //         //         },
        //         //         output: {
        //         //             comments: false
        //         //         }
        //         //     }
        //         // })
        //     )
        // }
    },
    
    devServer:{
        hot: true,
        // open: process.platform === 'darwin',
        // host: 'www.193959.cn',
        // port: 80,
        // https: false,
        // hotOnly: false,
        proxy: {// 设置代理
            '/api': {
                target: 'http://121.196.179.31',
                // target: 'https://captcha.luosimao.com/api/site_verify',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        before: app => {}
    }
}