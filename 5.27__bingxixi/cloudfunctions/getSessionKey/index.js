// 云函数入口文件
const cloud = require('wx-server-sdk')
const request = require('request');
// 加密的模块
const crypto = require('crypto');
cloud.init()
const getSessionKey = function(code){
  return new Promise((resolve,reject)=>{
    // GET https://api.weixin.qq.com/sns/jscode2session
    // ?appid=APPID&secret=SECRET
    // &js_code=JSCODE
    // &grant_type=authorization_code
    // json true 响应体
    request({
      method:'GET',
      url:'https://api.weixin.qq.com/sns/jscode2session',
      qs:{
        appid:'wxca716a7a8775f213',
        secret:'2ae3ccd1d11a2d256b462ab2f30cbcd5',
        js_code:code,
        grant_type:'auto'
      },
      json:true
    },(err,res,body)=>{
      if(err){
        reject(err)
      }
      resolve(body)
    })
  })
}
// 云函数入口函数
exports.main = async (event, context) => {
  // 捕获代码错误
  try{
    const {code} = event;
    const weixinRes = await getSessionKey(code);
    const {openid,session_key} = weixinRes;
    // 1. 创建一个hash加密算法
    // 2. 对谁加密
    // 3. 以什么格式输出  hex 16进制
    const skey = crypto.createHash('sha1')
    .update(session_key,'utf8')
    .digest('hex')
    // 保存在服务端的一个信息
    // 返回 session key
    return {
      skey
    }
  } catch(err){
    return {
      err
    }
  }
}