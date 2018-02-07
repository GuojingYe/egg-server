'use strict';

module.exports = app => {
    require('./router/api')(app);
    require('./router/manager')(app);
    require('./router/common')(app);
};