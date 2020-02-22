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
    },

    /**
     * @exports
     * @method create
     * @param {fullName, email}
     * @summary create a new user
     * @returns Promise<UserModel[]>
     */
    async create(user) {
        return await UserModel.create(user, function (err, user) {
            if (err) return handleError(err);
            console.log('user - ', user);
            return user;
        });
    }
};
