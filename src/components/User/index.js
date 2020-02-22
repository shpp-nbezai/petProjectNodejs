const UserService = require('./service');
const url = require('url');

/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function findAll(req, res, next) {
    try {
        const users = await UserService.findAll();

        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function create(req, res, next) {
    try {
        UserService.create(req.body);
        res.status(200).json({
            message: 'New user created',
            createdUser: req.body.fullName
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    findAll,
    create
}