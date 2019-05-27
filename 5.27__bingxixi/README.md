# wx小程序登录操作

## session key
当前用户会话操作的时效性,维护用户的登录状态。
时效性：和用户的使用频率

- 通过 checkSession 检查时效性

## getUserInfo
返回的敏感数据,可以配合 session_key 解密
加密后返回 session_key