const {Router} = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const router = Router();

router.post('/new', 
            [
                check('name', 'El nombre es obligatorio').not().isEmpty(),
                check('email', 'El email es obligatorio').isEmail(),
                check('password', 'El password debe de ser de 6 carácteres').isLength({min:6})
            ], 
            crearUsuario);

router.post('/', 
            [
                check('email', 'El email es obligatorio').isEmail(),
                check('password', 'El password es obligatorio').not().isEmpty()
            ],
            loginUsuario);

router.post('/renew', revalidarToken);

module.exports = router;