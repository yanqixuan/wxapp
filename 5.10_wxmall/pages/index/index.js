const WXAPI = require('../../wxapi/main');

Page({
  data: {
    goods: [],
    categories: [],
    activeCategoryId: 0,
    banners: [],

    autoplay: true,
    interval: 3000,
    duration: 1000,
    swiperCurrent: 0,

    goodsRecommend: []
  },
  swiperchange(e) {
    console.log(e, '-------')
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  onLoad() {
    // 界面没有难度
    // 开发的流程 和 标准 是做一个新项目,大项目的需要
    this.getCategory(); //类别
    this.getBanners();  //广告
    this.loadGoods();   //商品列表
    this.getRecommend();//获取爆款推荐
  },
  getRecommend() {
    WXAPI.loadGoods({
      recommendStatus: 1
    })
      .then(res => {
        console.log(res)
        if (res.code === 0) {
          this.setData({
            goodsRecommend: res.data
          })
        }
      })
  },
  getCategory() {

  },
  getBanners() {
    WXAPI
      .getBanners({
        type: 'new'
      })
      .then(res => {
        // 大厂API接口的约定  返回数据状态码为0(没有错误)
        if (res.code === 0) {
          this.setData({
            banners: res.data
          })
        }
        console.log(res);
      })
  },
  loadGoods() {

  }
})