const QQ_MAP_KEY = '7JMBZ-OHCK3-AW23Q-3HPSG-RPVLH-RNBKI'

wx.cloud.init({
    env:"http-http"
})

const db = wx.cloud.database()
// 添加心情
export const addEmotion = (openid,emotion) => {
    return db.collection('diary').add({
        data:{
            openid,
            emotion,
            tsModified:Date.now()
        }
    })
}

// 获取位置
export const geocoder = (lat,lon,success = () =>{},fail = ()=>{}) =>{
    return wx.request({
        url:'https://apis.map.qq.com/ws/geocoder/v1/',
        data:{
            location:`${lat},${lon}`,
            key: QQ_MAP_KEY,
            get_poi:0
        },
        success,
        fail
    })
}

// 获取天气
export const getWeather = (lat,lon)=>{
    return wx.cloud.callFunction({
        name:'he-weather',
        data:{
            lat,
            lon
        }
    })
}

// 往数据库里查询到用户的openid和具体的时间段，然后获取信息
export const getEmotionByOpenidAndDate = (openid,year,month)=>{
    // db.command查询数据
    const _=db.command
    year = parseInt(year)
    month = parseInt(month)
    let start = new Date(year,month-1,1).getTime()
    let end = new Date(year,month,1).getTime()
    return db.collection('diary').where({
        openid,
        tsModified:_.gte(start).and(_.lt(end))
    })
    .get()
}

export const jscode2session = (code)=>{
    return wx.cloud.callFunction({
        name:'jscode2session',
        data:{
            code
        }
    })
}