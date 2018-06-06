'use strict';

const SqlString = require('sqlstring');

const CURRENT_TIMESTAMP = { toSqlString() {
  return 'CURRENT_TIMESTAMP()';
} };


class Mysql {
  constructor(pool) {
    this.pool = pool;
    this.literals = { now: CURRENT_TIMESTAMP };
  }

  // 查询
  async query(sql, param) {
    const connection = await this._getConnection();
    const result = await this._doQuery(connection, sql, param);
    return result;
  }

  async _getConnection() {
    return new Promise((resolve, reject) => {
      this.pool.getConnection((err, connection) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(connection);
        }
      });
    });
  }

  async _doQuery(connection, sql, param) {
    const realSql = SqlString.format(sql, param);
    return new Promise((resolve, reject) => {
      connection.query(realSql, function(err, rows) {
        connection.release();
        if (err) {
          reject(err);
        }
        else {
          resolve(rows);
        }
      });
    });
  }

  // 更新
  async update(table, data, updates) {
    const { where, columns } = updates;
    const baseSql = `UPDATE ${table} SET `;
    let columnSql = '';
    columns.forEach(column => {
      columnSql += `${column} = :${column}, `;
    });

    columnSql = columnSql.slice(0, columnSql.lastIndexOf(','));

    let conditionSql = ' WHERE 1 = 1';
    const conditionColumns = [];
    for (const key in where) {
      data[key] = where[key];
      conditionColumns.push(key);
    }

    conditionColumns.forEach(column => {
      conditionSql += ` AND ${column} = :${column}`;
    });

    const sql = baseSql + columnSql + conditionSql;

    return new Promise((resolve, reject) => {
      this.pool.getConnection((err, connection) => {
        if (err) {
          reject(err);
        }
        else {
          connection.config.queryFormat = function(query, values) {
            if (!values) return query;
            return query.replace(/\:(\w+)/g, function(txt, key) {
              if (values.hasOwnProperty(key)) {
                return this.escape(values[key]);
              }
              return txt;
            }.bind(this));
          };

          connection.query(sql, data, (err, rows) => {
            connection.release();
            if (err) {
              reject(err);
            }
            else {
              resolve(rows);
            }
          });
        }
      });
    });
  }

  // 插入
  async insert(table, data) {
    const baseSql = `INSERT INTO ${table} (`;

    const columns = [];
    for (const key in data) {
      columns.push(key);
    }

    let columnSql = '';
    columns.forEach(column => {
      columnSql += `${column}, `;
    });
    columnSql = columnSql.slice(0, columnSql.lastIndexOf(',')) + ') VALUES ( ';

    columns.forEach(column => {
      columnSql += `:${column}, `;
    });

    columnSql = columnSql.slice(0, columnSql.lastIndexOf(',')) + ')';

    const sql = baseSql + columnSql;

    return new Promise((resolve, reject) => {
      this.pool.getConnection((err, connection) => {
        if (err) {
          reject(err);
        }
        else {
          connection.config.queryFormat = function(query, values) {
            if (!values) return query;
            return query.replace(/\:(\w+)/g, function(txt, key) {
              if (values.hasOwnProperty(key)) {
                return this.escape(values[key]);
              }
              return txt;
            }.bind(this));
          };

          connection.query(sql, data, (err, rows) => {
            connection.release();
            if (err) {
              reject(err);
            }
            else {
              resolve(rows);
            }
          });
        }
      });
    });
  }

  // 删除
  async delete(table, condition) {
    const baseSql = `DELETE FROM ${table} WHERE 1 = 1`;
    const columns = [];

    for (const key in condition) {
      columns.push(key);
    }

    let columnSql = '';
    columns.forEach(column => {
      columnSql += ` AND ${column} = :${column}`;
    });

    const sql = baseSql + columnSql;

    return new Promise((resolve, reject) => {
      this.pool.getConnection((err, connection) => {
        if (err) {
          reject(err);
        }
        else {
          connection.config.queryFormat = function(query, values) {
            if (!values) return query;
            return query.replace(/\:(\w+)/g, function(txt, key) {
              if (values.hasOwnProperty(key)) {
                return this.escape(values[key]);
              }
              return txt;
            }.bind(this));
          };

          connection.query(sql, condition, (err, rows) => {
            if (err) {
              connection.release();
              reject(err);
            }
            else {
              connection.release();
              resolve(rows);
            }
          });
        }
      });
    });
  }
}

module.exports = Mysql;
