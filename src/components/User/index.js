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
        const queryParameters = url.parse(req.url, true).query;

        if (queryParameters.fullName && queryParameters.email) {
            const newUser = await UserService.create(queryParameters.fullName, queryParameters.email);

            if (newUser) {
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end(`User ${queryParameters.fullName} added `);
            }
        } else {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Url parameters "fullName" or "email" not found...');
        }
        const users = await UserService.findAll();

        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    findAll
}