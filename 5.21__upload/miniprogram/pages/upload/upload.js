const app = getApp()

Page({
  data: {
    files: []
  },
  chooseImage() {
    let that = this
    wx.chooseImage({
      // original 原图  compressed 压缩
      sizeType: ['original', 'compressed'],
      // 相册 和 相机
      sourceType: ['album', 'camera'],
      success: (result) => {
        console.log(result)
        that.setData({
          files: that.data.files.concat(result.tempFilePaths)
        })

        for (let i = 0; i < result.tempFilePaths.length; i++) {
          const filePath = result.tempFilePaths[i]
          let a = filePath.lastIndexOf('.')
          let b = filePath.lastIndexOf('.',a-1)
          let c = filePath.substring(b+1,a)
          const cloudPath = c + filePath.match(/\.[^.]+?$/)

          wx.cloud.uploadFile({
            filePath: filePath,  //要上传文件资源的路径
            cloudPath: cloudPath,
            success(res) {
              console.log('上传成功', res);
            },
            fail(err) {
              console.log('上传失败')
            }
          });
        }

      },
      fail: () => { },
      complete: () => { }
    });
  },
  previewImage(e) {
    console.log(e);
    wx.previewImage({
      current: e.currentTarget.id,
      urls: this.data.files
    })
  }
})