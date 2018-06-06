'use strict';

const Controller = require('egg').Controller;

class articleManagerController extends Controller {
  // 新增或编辑文章
  async updateArticle() {
    const { ctx } = this;
    ctx.validate({
      articleId: { type: 'int', required: false },
      title: { type: 'string', min: 2, max: 16 },
      content: 'string',
      authorId: 'int',
    });

    const { articleId } = ctx.request.body;

    if (articleId) {
      await ctx.service.articleManager.editArticle(ctx.request.body);
    }
    else {
      await ctx.service.addNewArticle(ctx.request.body);
    }
  }
}

module.exports = articleManagerController;
