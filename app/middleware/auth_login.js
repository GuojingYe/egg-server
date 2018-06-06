'use strict';

module.exports = () => {
  return async function authStaffLogin(ctx, next) {
    if (!ctx.session || !ctx.session.staffId) {
      ctx.throw(401, '请先前往登录!');
    }

    await next();
  };
};

