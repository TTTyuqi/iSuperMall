const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
//    配置别名
    chainWebpack: (config)=> {
      config.resolve.alias
        .set('@$', resolve('src'))
        .set('@assets', resolve('src/assets'))
        .set('@common', resolve('src/common'))
        .set('@components', resolve('src/components'))
        .set('@network', resolve('src/network'))
        .set('@view', resolve('src/view'))
    }

  }
