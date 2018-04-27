'use strict';

module.exports = {
  doResponse(resultData) {
    this.body = { resultStatus: true, resultData };
  },
};
