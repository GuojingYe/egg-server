'use strict';

const Service = require('egg').Service;

class userService extends Service {
  async getUserInfo(userId) {
    const user = await this.app.mysql.get('user', { userId });
    if (!user) {
      this.ctx.throw(404, '用户不存在');
    }

    return user;
  }
}

module.exports = userService;
