'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/api/v5/user/:userId', controller.api.user.getUserInfo);
};
