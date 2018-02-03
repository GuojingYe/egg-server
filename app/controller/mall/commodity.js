const Controller = require('egg').Controller;

class commodityController extends Controller {
    async getCommodity() {
        const {ctx} = this;
        ctx.doResponse({name: 'ygj'});
    }
}

module.exports = commodityController;