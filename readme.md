##CAX 动画引擎库
- // require  es5就支持，是node普遍采用的模块化方案   commonjs规范  通用的模块化方案
    // import from  es6的模块化方案
- wx.getSystemInfoSync();//获取设备信息
- 小程序 canvas 找cax
- 组件 引入 cax组件
    new cax.Stage()
    cax.Rect
    add
    update

##countdown 组件
- 文案，获取验证码  点击后开始计时  start状态   false|true
- Page为组件的调用者    引入组件
- 外部给内部传入数据 properties
- 组件内可用数据    data(自身数据) + propreties(外界传入)
- <countdown start="{{start}}"> 传入start

- properties 有个observer选项，当外界传的值改变的时候会执行，组件是构成页面的，是为页面打工的。

- start 由外传入内部是properties 有利于页面操作关键状态
    数据由外到内 通过properties
    由内到外

- triggerEvent方法

###Page页面中
    <!-- 当自定义组件触发“myevent”事件时，调用“onMyEvent”方法 -->
    <component-tag-name bind:myevent="onMyEvent" />

    Page({
    onMyEvent(e) {
        e.detail // 自定义组件触发事件时提供的detail对象
    }
    })

###组件页面中
    <button bindtap="onTap">点击这个按钮将触发“myevent”事件</button>

    Component({
        properties: {},
        methods: {
            onTap() {
                const myEventDetail = {} // detail对象，提供给事件监听函数
                const myEventOption = {} // 触发事件的选项
                this.triggerEvent('myevent', myEventDetail, myEventOption)
            }
        }
    })