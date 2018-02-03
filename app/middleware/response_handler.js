module.exports = () => {
    return async function responseHandler(ctx, next) {
        ctx.getLogger('accessLogger').info
        ('param:', JSON.stringify(ctx.param), 'query:', JSON.stringify(ctx.query), 'body:', JSON.stringify(ctx.body));
        ctx.doError = (errorMessage, statusCode) => {
            ctx.body = {resultStatus: false, errorMessage: errorMessage};
            ctx.status = statusCode ? statusCode : 404;
        };

        ctx.doResponse = resultData => {
            ctx.body = {resultStatus: true, resultData: resultData};
        };

        await next();
    }
};