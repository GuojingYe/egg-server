'use strict';

module.exports = {
  /**
   * 从富文本内容中提取简单文本
   * @param {string} html 需要被提取的富文本
   * @return {string} msg 提取后的简单文本
   */
  getSimpleText(html) {
    // 匹配html标签的正则表达式，"g"是搜索匹配多个符合的内容
    const re1 = new RegExp('<.+?>', 'g');
    // 执行替换成空字符
    const msg = html.replace(re1, '');
    return msg;
  },

  // 截取url类型的参数
  hrefObj(paramString2) {
    const paramString = paramString2.split('&');
    const tempObj = {};
    for (let i = 0; i < paramString.length; i++) {
      tempObj[paramString[i].split('=')[0]] = paramString[i].split('=')[1];
    }
    return tempObj;
  },
};
