'use strict';

const sendToWormhole = require('stream-wormhole');
const Controller = require('egg').Controller;


class uploaderController extends Controller {
  async upload() {
    const { ctx } = this;
    const stream = await ctx.getFileStream();
    const name = stream.filename;
    let result;
    try {
      const pictureBucket = ctx.oss.get('bucket1');
      result = await pictureBucket.put(name, stream);
    }
    catch (err) {
      // 必须将上传的文件流消费掉，要不然浏览器响应会卡死
      await sendToWormhole(stream);
      throw err;
    }

    // ctx.body = {
    //     url: result.url,
    //     // 所有表单字段都能通过 `stream.fields` 获取到
    //     fields: stream.fields,
    // };

    ctx.doResponse({ url: result.url });
  }
}

module.exports = uploaderController;
