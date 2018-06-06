'use strict';
// const crypto = require('crypto');

module.exports = {
  doResponse(data) {
    this.body = { resultStatus: true, resultData: data ? data : 'success' };
  },
};
