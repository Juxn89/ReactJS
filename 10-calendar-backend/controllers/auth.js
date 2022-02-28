const {response} = require('express');
const UserModel = require('../models/UserModel');
const bcrypt = require('bcryptjs');
const { createJWT } = require('../helpers/jwt');

const crearUsuario = async (req, res = response) => {
    const { email, password } = req.body;
    
    try {
        let user = await UserModel.findOne({email});

        if(user) {
            return res.status(400).json({
                ok: false,
                msg: 'A user already exits with this email.'
            });
        }
        
        user = new UserModel(req.body);

        // Encrypt password
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);

        await user.save();
        // JWT
        const token = await createJWT(user.id, user.name);

        res.status(201).json({
            ok: true,
            msg: 'Ok',
            uid: user.id,
            name: user.name,
            token

        });      
    } catch (error) {
        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Please contact with the administrator'
        }); 
    }
};

const loginUsuario = async (req, res = response) => {
    const { email, password } = req.body;
    
    try {
        const user = await UserModel.findOne( { email } );

        if(!user) {
            return res.status(400).json({
                ok: false,
                msg: 'Email or password incorrect'
            });
        }

        const validPassword = bcrypt.compareSync(password, user.password);

        if(!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Email or password incorrect'
            });
        }

        // JWT
        const token = await createJWT(user.id, user.name);

        res.status(201).json({
            ok: true,
            msg: 'Ok',
            uid: user.id,
            name: user.name,
            token
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Please contact with the administrator'
        });
    }
};

const revalidarToken = async (req, res = response) => {
    const { uid, name } = req;

    const token = await createJWT(uid, name);

    res.json({
        ok: true,
        msg: 'renew',
        token
    });
};

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}