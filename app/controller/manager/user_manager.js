'use strict';

const Controller = require('egg').Controller;

class userManagerController extends Controller {
    async userList() {
        const {ctx} = this;
        const user = await this.service.manager.userManager.userList();
        ctx.doResponse(user);
    }

    async addNewUser() {
        const {ctx} = this;
        const createRuler = {
            name: 'string',
            age: 'number',
            gender: 'number'
        };

        ctx.validate(createRuler);
        await this.service.manager.userManager.addNewUser(ctx.request.body);
        ctx.status = 201;
    }
}

module.exports = userManagerController;