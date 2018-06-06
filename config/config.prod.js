'use strict';

const mysql = require('mysql');

const pool = mysql.createPool({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: '123456',
  database: 'egg_server',
  charset: 'utf8mb4',
  connectionLimit: 100,
});

module.exports = {
  mysql: {
    client: {
      host: '127.0.0.1',
      port: '3306',
      user: 'root',
      password: '123456',
      database: 'egg_server',
    },
    // 是否加载到 api 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  },

  redis: {
    client: {
      host: '127.0.0.1',
      port: 6379,
      db: 1,
      password: 'password',
    },
  },

  // 数据库连接池
  mysql_pool: pool,
};
