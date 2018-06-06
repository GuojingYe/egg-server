'use strict';

const path = require('path');
const mysql = require('mysql');

const pool = mysql.createPool({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: '123456',
  database: 'egg_server',
  charset: 'utf8mb4',
  connectionLimit: 10,
});


module.exports = appInfo => {
  return {
    keys: 'ygjing@key',

    proxy: true,

    // 中间件
    middleware: [ 'errorHandler', 'authStaffLogin' ],

    authStaffLogin: {
      match: '/manager',
    },

    security: {
      csrf: {
        enable: false,
      },
    },

    // 自定义日志
    customLogger: {
      accessLogger: {
        file: path.join(appInfo.root, 'logs/' + appInfo.name + '_access_logs/access.log'),
      },
    },

    // 阿里云 oss 配置
    oss: {
      clients: {
        bucket1: {
          bucket: 'bucketName1',
        },
        bucket2: {
          bucket: 'bucketName2',
        },
      },
      default: {
        endpoint: 'http://oss-cn-hangzhou.aliyuncs.com',
        accessKeyId: 'XXXXXXXXXXXXXXXXXXX',
        accessKeySecret: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      },
    },

    // 数据库配置
    mysql: {
      client: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: '123456',
        database: 'egg_server',
      },
      // 是否加载到 api 上，默认开启
      app: true,
      // 是否加载到 agent 上，默认关闭
      agent: false,
    },

    // redis 缓存配置
    redis: {
      client: {
        host: '127.0.0.1',
        port: 6379,
        db: 1,
        password: 'password',
      },
    },

    cors: {
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
      credentials: true,
    },

    alinode: {
      appid: 1111,
      secret: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      error_log: [ '/root/logs/egg_server/common-error.log' ],
      packages: [ '/service/egg_server/node/package.json' ],
    },

    cluster: {
      name: 'egg_server',
      listen: {
        port: 9598,
      },
    },

    // 数据库连接池
    mysql_pool: pool,

    session: {
      key: 'MINE_SESSION',
      maxAge: 'session', // 30 分钟
      httpOnly: true,
      encrypt: true,
      domain: '.yeguojing.com',
    },
  };
};
