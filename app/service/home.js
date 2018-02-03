const Service = require('egg').Service;

class homeService extends Service {
    async getUserInfo(userId) {
        const user = await this.app.mysql.get('user', {userId: userId});
        return {user};
    }
}

module.exports = homeService;