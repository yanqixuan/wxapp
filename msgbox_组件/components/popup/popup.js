// components/popup/popup.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {//page传来的参数
    // 向page要什么
    title:{
      type:String,
      value:'标题'
    },
    content:{
      type:String,
      value:'内容内容'
    },
    btn_no:{
      type:String,
      value:'取消'
    },
    btn_ok:{
      type:String,
      value:'确定'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    flag:true//弹窗显示与隐藏
  },

  /**
   * 组件的方法列表
   */
  methods: {
    hidePopup:function(){
      this.setData({
        flag:!this.data.flag
      })
    },
    showPopup(){
      this.setData({
        flag:!this.data.flag
      })
    },
    _error(){
      this.triggerEvent('error');//向外广播error事件
    },
    _success(){
      this.triggerEvent('success');
    }
  }
})
