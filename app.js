module.exports = app => {
    app.beforeStart(async () => {
        // 应用会等待这个函数执行完成才启动
        // api.cities = await api.curl('http://example.com/city.json', {
        //     method: 'GET',
        //     dataType: 'json',
        // });
        app.cities = {
            name: '上饶',
            code: 334119
        }
    });
};