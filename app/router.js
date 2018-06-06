'use strict';

module.exports = app => {
  const { router, controller } = app;

  // APP 接口
  router.get('/api/v5/article/:articleId', controller.article.getArticleDetail);

  // 管理后台接口
  router.post('/manager/article', controller.articleManager.updateArticle);

};
