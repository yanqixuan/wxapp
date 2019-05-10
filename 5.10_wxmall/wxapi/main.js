// API 模块   封装方法
//向外输出这个对象
const API_BASE_URL = 'http://api.it120.cc';
const CONFIG = require('./config.js');  //配置文件
const request = (url,needSubDomain,method,data) =>{  //不同的请求不同的参数
  let _url = API_BASE_URL + (needSubDomain? '/' + CONFIG.subDomain:'') + url; //拼接url 路径 子域名
  return new Promise((resolve,reject)=>{
    wx.request({
      url:_url,
      method:method,//get post等方式
      data:data,//查询参数
      header:{  //请求头  
        'Content-Type':'application/x-www-form-urlencoded'
      },
      success(request){
        resolve(request.data)
      },
      fail(error){
        reject(error)
      }
    })
  })
}

module.exports = {
  loadGoods: (data) => {
    return request('/shop/goods/list',true,'post',data);
  },//加载商品
  getBanners: (data) => {
    // return new Promise()
    return request('/banner/list',true,'get',data);
  },
  getCategory: () => {
    return new Promise()
  }
}