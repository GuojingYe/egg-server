// const crypto = require('crypto');

module.exports = {
    doResponse(resultData) {
        this.body = {resultStatus: true, resultData: resultData};
    },

    // async getFileStreamWithHash() {
    //     const hash = crypto.createHash('md5');
    //     const stream = await this.getFileStream();
    //
    //     return new Promise((resolve, reject) => {
    //         stream.on('data', hash.update.bind(hash));
    //         stream.on('end', function () {
    //             const name = hash.digest('hex') + stream.filename.substring(stream.filename.lastIndexOf('.'));
    //             resolve({stream: stream, name: name});
    //         });
    //         stream.on('error', function (err) {
    //             reject(err);
    //         });
    //     })
    // }
};