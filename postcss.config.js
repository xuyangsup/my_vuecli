module.exports = {
  plugins: {
    "postcss-pxtorem": {
      // 设计稿 375:37.5
      // 设计稿：750:75
      // Vant 是基于 375
      rootValue: 37.5, // 根据设计图尺寸写，设计图是1920，就写192
      propList: ["*"],
      selectorBlackList: [] // 不进行px转换的选择器
    }
  }
}