const path = require('path');

module.exports = appInfo => {
    return {
        keys: 'yggjingkey',
        // 加载 errorHandler 中间件
        middleware: ['errorHandler', 'responseHandler'],
        // 只对 /api 前缀的 url 路径生效
        // errorHandler: {
        //     match: '/api',
        // },

        security: {
            csrf: {
                enable: false,
            }
        },
        customLogger: {
            accessLogger: {
                file: path.join(appInfo.root, 'logs/access-logs/access.log'),
            },
        },
    }
};
