'use strict';

const Mysql = require('../util/mysql');

module.exports = {
  get mysql() {
    return new Mysql(this.config.mysql_pool);
  },
};
