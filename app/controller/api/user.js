'use strict';

const Controller = require('egg').Controller;

class userController extends Controller {
  async getUserInfo() {
    const { ctx } = this;
    const userId = ctx.params.userId;
    const user = await this.service.api.user.getUserInfo(userId);

    // const name = await this.api.redis.get('name');
    // console.log('name:', name);
    // console.log('result', ctx.helper.doAdd(1, 2));

    ctx.doResponse(user);
  }
}

module.exports = userController;
