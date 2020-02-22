const { Router } =  require('express');
const UserComponent =  require('../User');

/**
 * Express router to mount user related functions on.
 * @type {Express.Router}
 * @const
 */
const router = Router();

/**
 * Route serving list of users.
 * @name /v1/users
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/find',  UserComponent.findAll);

/**
 * Route create new user.
 * @name /v1/users
 * @function
 * @inner {fulname, email}
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/create',  UserComponent.create);

module.exports = router;