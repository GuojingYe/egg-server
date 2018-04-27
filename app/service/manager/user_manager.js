'use strict';

const Service = require('egg').Service;

class userManagerService extends Service {
  async userList() {
    return await this.app.mysql.select('user');
  }

  async addNewUser(user) {
    return await this.app.mysql.insert('user', user);
  }
}

module.exports = userManagerService;
