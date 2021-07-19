import * as express from 'express';
import * as bcrypt from 'bcrypt';
import * as passport from 'passport';
import Image from '../models/image';
import Lecture from '../models/lecture';
import User from '../models/user';

import { isLoggedIn } from './middleware';

const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        const alreadyLogin = await User.findOne({
            where: {
                nickName: req.body.nickName,
            },
        });
        if (alreadyLogin) {
            return res.status(403).send('이미 사용중인 아이디 입니다.');
        }
        const hashPassword = await bcrypt.hash(req.body.passWord, 15); 
        const newUser = await User.create({
            nickName: req.body.nickName,
            email: req.body.email,
            passWord: hashPassword,
        });
        console.log(newUser);
        return res.status(200).json(newUser);
    } catch (e) {
        console.error(e);
        return next(e);
    }
})


router.post('/logout', (req, res) => {
    req.logout();
    if (req.session) {
        req.session.destroy((err) => {
            res.send('logout 성공');
        });
    } else {
        res.send('logout 성공');
    }
})


router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            console.error(err);
            return next(err);
        }
        if (info) {
            return res.status(401).send(info.reason);
        }
        return req.login(user, async (loginErr) => {
            try {
                if (loginErr) {
                    return next(loginErr);
                }
                const fullUser = await User.findOne({
                    where: { id: user.id },
                });
                console.log(fullUser);
                return res.json(fullUser);
            } catch (e) {
                return next(e);
            }
        });
    })(req, res, next); 
});