云开发是腾讯云在大力推广
快速上手   全栈项目

- 云开发提供可视化的 mongoDB
    连接数据库
    const db = wx.cloud.database();
    const userInfo = db.collection('userInfo')
    支持直接存JSON
    后端即服务 增删改查
    add

    要做列表,先建collection 
    add , get

    where 条件查询
    _openId:openId

    count() 查询出来有多少条数据    有就不存，没有就存