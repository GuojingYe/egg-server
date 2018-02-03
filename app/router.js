'use strict';

module.exports = app => {
    const {router, controller} = app;
    router.get('/api/v5/user', controller.home.getUserInfo);
    router.post('/api/v5/user', controller.home.addNewUser);
    router.get('/api/v5/commodity', controller.mall.commodity.getCommodity);
};