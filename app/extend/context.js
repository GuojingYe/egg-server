'use strict';

module.exports = {
  doResponse(data) {
    this.body = { resultStatus: true, resultData: data ? data : 'success' };
  },
};
