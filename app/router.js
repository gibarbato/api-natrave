import Router from '@koa/router'

import * as users from './users/index.js'
import * as hunches from './hunches/index.js'
import * as games from './games/index.js'


export const router = new Router();

/* router.get('/users', users.list) */ /* comentado método no /user/index */
/*login */
router.get('/login', users.login)

router.post('/users', users.create)

// router.get('/hunches', hunches.list)

router.post('/hunches', hunches.create)

router.get('/games', games.list)

router.get('/:username', users.hunches)
