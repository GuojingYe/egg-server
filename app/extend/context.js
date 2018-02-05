module.exports = {
    doResponse(resultData) {
        this.body = {resultStatus: true, resultData: resultData};
    },
    doError(statusCode, errorMessage) {
        this.body = {resultStatus: false, errorMessage: errorMessage};
        this.status = statusCode;
    }
};