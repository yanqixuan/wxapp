import util from '../../utils/index'
import config from '../../utils/config'

let app = getApp()  //相当于 Page({})
let isDEV = config.isDev

let handler = {
  data:{
    page:1, //接口参数
    days:3,
    pageSize:4,
    totalSize:0,
    hasMore:true,  //是否还有更多数据
    articleList:[],
    defaultImg:config.defaultImg,
    hiddenLoading:false
  },
  onLoad(){
    this.requestArticle()
  },
  requestArticle(){
    util.request({
      url:'list',
      mock:true,
      data:{
        tag:'微信热门',
        start:this.data.page || 1, //默认1
        days:this.data.days,
        pageSize:this.data.pageSize,
        langs:config.appLang || 'en',
      }
    })
    .then(res =>{
      console.log(res)
    })
  }
}
Page(handler)