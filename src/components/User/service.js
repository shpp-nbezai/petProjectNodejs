const UserModel = require('./model');

module.exports = {
    /**
     * @exports
     * @method findAll
     * @param {}
     * @summary get list of all users
     * @returns Promise<UserModel[]>
     */
    async findAll() {
        return await UserModel.find({});
    }

    /**
     * @exports
     * @method create
     * @param {}
     * @summary get list of all users
     * @returns Promise<UserModel[]>
     */
    async create(fullName, email) {
        
        return await UserModel.find({});
    }

};
