'use strict';

const Service = require('egg').Service;

class articleService extends Service {
  // 编辑文章
  async editArticle({ articleId, title, content, authorId }) {
    const mysql = this.app.mysql;
    const result = await mysql.update('home_article', { articleId, title, content, authorId }, {
      where: { articleId }, columns: [ 'articleId', 'title', 'content', 'authorId' ],
    });

    if (!result.affectedRows) {
      this.ctx.throw(404, 'article not found');
    }
  }

  // 新增文章
  async addNewArticle({ title, content, authorId }) {
    const mysql = this.app.mysql;
    await mysql.insert('home_article', { title, content, authorId, createTime: mysql.literals.now });
  }
}

module.exports = articleService;
