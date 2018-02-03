const Controller = require('egg').Controller;

class commodityController extends Controller {
    async getCommodity() {
        const {ctx} = this;
        ctx.logger.info('this is ygj de log');
        ctx.logger.warn('WARNNING!!!!');
        ctx.logger.error(new Error('whoops'));
        ctx.logger.error('error~~@!');
        ctx.doResponse({name: 'ygj'});
    }
}

module.exports = commodityController;