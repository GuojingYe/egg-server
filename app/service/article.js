'use strict';

const Service = require('egg').Service;

class ArticleService extends Service {
  async getArticleDetail(articleId) {
    const sql = 'SELECT articleId, title, content, authorId, createTime' +
      ' FROM home_article WHERE articleId = ?';
    const article = (await this.app.mysql.query(sql, [ articleId ]))[0];
    if (!articleId) {
      this.ctx.throw(404, 'article not found');
    }

    return article;
  }
}

module.exports = ArticleService;
