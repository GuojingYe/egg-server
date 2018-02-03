module.exports = app => {
    app.resources('topics', '/api/v2/topics', app.controller.topics);
};
