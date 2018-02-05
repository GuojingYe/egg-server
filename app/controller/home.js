const Controller = require('egg').Controller;

class homeController extends Controller {
    async getUserInfo() {
        const {ctx} = this;

        console.log('result', ctx.helper.doAdd(1, 2));

        const userId = ctx.query.userId;
        if (!userId) {
            return ctx.doError(422, '请求参数无效');
        }

        const user = await this.service.home.getUserInfo(userId);
        const name = await this.app.redis.get('name');
        console.log('name:', name);

        if (!user.userId) {
            return ctx.doError(404, '用户不存在');
        }
        ctx.doResponse(user);
    }

    async addNewUser() {
        const {ctx} = this;

        const createRuler = {
            userId: 'number',
            name: 'string',
            age: 'number',
            gender: 'number'
        };

        ctx.validate(createRuler);
        // let result = ctx.validate(createRuler);
        // console.log(result);
        // ctx.body = 'success';
    }
}

module.exports = homeController;