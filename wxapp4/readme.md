- wxml 是模板, {{}}是要被编译的， 用户看到的不是wxml,是wxml被js data 填充编译后的页面 
    是wxml + wxss + js 的合体
- 在每次setData传入数据时，会重新触发compile
- 我们会在wxml里把所有的逻辑及对数据的渴求都表达出来。
    在某一刻页面只会显示当前状态的页面状态，跟数据息息相关。

    状态 由数据决定
    改变数据,setData后，界面自动变，数据驱动的页面。  MVVM
    数据要和界面状态对应。

- todos
    健身    表单    js dom加 todos[]    appendChild
    data:{
        todos:[]
    }
    form submit时   添加数据this.setData()

- {{js 运行区域}}