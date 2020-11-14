const withImages = require(`next-images`)
module.exports = withImages()


// const withCSS = require('@zeit/next-css')
// module.exports = withCSS({
//   /* config options here */
// })

// module.exports = {
//   webpack: (config, { isServer }) => {
//     // Fixes npm packages that depend on `fs` module
//     if (!isServer) {
//       config.node = {
//         fs: 'empty'
//       }
//     }

//     return config
//   }
// }
// module.exports = {
// 	webpack(config) {
// 	  config.module.rules.push({ // 웹팩설정에 로더 추가함
// 		test: /\.svg$/,
// 		issuer: {
// 		  test: /\.(js|ts)x?$/,
// 		},
// 		use: ['@svgr/webpack'],
// 	  });
  
// 	  return config;
// 	},
//   };