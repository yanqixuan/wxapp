Page({
  http:function(){
    // 下载到手机端的
    // 从本地到云端
    wx.cloud.callFunction({
      name: 'http'
    })
    .then(res =>{
      console.log(res);
    })
  }
})