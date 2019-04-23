// Page({
//   data: {
//     imgUrls: [
//       'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
//       'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
//       'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
//     ],
//     indicatorDots: false,
//     autoplay: false,
//     interval: 5000,
//     duration: 1000,
//   },
//   changeIndicatorDots(e) {
//     this.setData({
//       indicatorDots: !this.data.indicatorDots
//     })
//   },
//   changeIndicatorDotsColor(e){
//     this.setData({
//       indicatorColor:red
//     })
//   },
//   changeAutoplay(e) {
//     this.setData({
//       autoplay: !this.data.autoplay
//     })
//   },
//   intervalChange(e) {
//     this.setData({
//       interval: e.detail.value
//     })
//   },
//   durationChange(e) {
//     this.setData({
//       duration: e.detail.value
//     })
//   }
// })

Page({
  data: {
    city:'南昌',
    imgUrl:[
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    items:[]
  },
  onLoad(){
    let that = this;
    wx.request({
      url:'https://www.easy-mock.com/mock/5cbeb3e93c65af2ab66ab0e6',
      data:{},
      method:'GET',
      header:{'Content-type':'application/json'},
      success:function(res){
        console.log(res)
        that.setData({
          items:res.data.data.movieList
        })
      }
    })
  }
})