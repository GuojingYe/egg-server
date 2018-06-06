'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
  // 获取文章详情
  async getArticleDetail() {
    const { ctx } = this;
    const articleId = ctx.params.articleId;

    console.log(articleId);
    ctx.doResponse();

    // const result = await ctx.service.article.getArticleDetail(articleId);
    // ctx.doResponse(result);
  }
}

module.exports = ArticleController;
