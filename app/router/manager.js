'use strict';

module.exports = app => {
    const {router, controller} = app;
    router.get('/manager/user', controller.manager.userManager.userList);
    router.post('/manager/user', controller.manager.userManager.addNewUser);
};