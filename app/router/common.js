'use strict';

module.exports = app => {
    const {router, controller} = app;

    router.post('/common/upload', controller.common.uploader.upload);
};