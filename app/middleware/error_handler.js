module.exports = () => {
    return async function errorHandler(ctx, next) {
        try {
            ctx.getLogger('accessLogger').info
            ('param:', JSON.stringify(ctx.param), 'query:', JSON.stringify(ctx.query), 'body:', JSON.stringify(ctx.body));
            await next();
        } catch (err) {
            // 所有的异常都在 app 上触发一个 error 事件，框架会记录一条错误日志
            ctx.app.emit('error', err, ctx);

            const status = err.status || 500;
            // 生产环境时 500 错误的详细错误内容不返回给客户端，因为可能包含敏感信息
            const errorMessage = status === 500 && ctx.app.config.env === 'prod' ? '服务器繁忙' : err.message;

            // 从 error 对象上读出各个属性，设置到响应中
            ctx.body = {resultStatus: false, errorMessage: errorMessage};
            if (status === 422) {
                ctx.body.detail = err.errors;
                ctx.body.errorMessage = '请求参数无效';
            }
            ctx.status = status;
        }
    };
};