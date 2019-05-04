- 组件思维
    弹窗组合了一些标签,形成了独立的弹窗功能，在其它页面也要用到，组合成一个独立的组件，页面由组件拼装而成。

- 组件语法
    同于page又有异
    Component({
        properties:{
            <!-- <属性类型定义 -->
            title:{
                type:String,
                value:''
            }
        },
        data:{

        },
        methods:{

        }
    })

- bind tap 区别
    bindtap 向外冒泡
    catch:tap   不会