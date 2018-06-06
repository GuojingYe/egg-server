# egg 服务端模板

一个egg框架的服务端模板，整合起来方便参考

## 启动
* 本地开发环境：npm run dev
* 测试环境： pm2 start server_test.json
* 正式环境： pm2 start server_prod.json

## 插件
* egg-mysql
* egg-validate
* egg-redis
* egg-oss
* egg-cors
* egg-alinode
* egg-session
* egg-logger

## 中间件
* ./app/middleware/auth_login.js // 验证是否登录
* ./app/middleware/error_handler.js // 错误处理

## 扩展
* ./app/extend/application.js
* ./app/extend/context.js
* ./app/extend/helper.js

## 工具类
* ./app/util/mysql.js

