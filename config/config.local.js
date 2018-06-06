'use strict';

module.exports = {
  middleware: [ 'errorHandler' ],

  proxy: false,

  redis: {
    client: {
      host: '127.0.0.1',
      port: 6379,
      db: 0,
      password: null,
    },
  },

  selfConfig: {
    name: 'hl',
  },
};
