module.exports = {
    mysql: {
        client: {
            // host
            host: '127.0.0.1',
            // 端口号
            port: '3306',
            // 用户名
            user: 'root',
            // 密码
            password: '123456',
            // 数据库名
            database: 'egg_test',
        },
        // 是否加载到 api 上，默认开启
        app: true,
        // 是否加载到 agent 上，默认关闭
        agent: false,
    },
    redis: {
        client: {
            port: 6379,          // Redis port
            host: '127.0.0.1',   // Redis host
            password: null,
            db: 0,
        },
    }
};