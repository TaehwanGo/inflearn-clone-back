const express = require('express');
const bcrypt = require('bcrypt');
const { User, Lecture, Image } = require('../models');
const passport = require('passport');
const { isLoggedIn, isNotLoggedIn } = require('./middleware');
const router = express.Router(); 


router.post('/', isNotLoggedIn, async (req, res, next) => {
    try {
        const exUser = await User.findOne({
            where: {
                email: req.body.email,
            }
        });
        if (exUser) {
            return res.status(403).send('이미 사용 중인 이메일 입니다!');
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        await User.create({
            email: req.body.email,
            nickName: req.body.nickName, 
            passWord: hashedPassword,
        })
        res.status(201).send('ok');
    } catch (error) {
        console.error(error)
        next(error);
    }
})





module.exports = router;