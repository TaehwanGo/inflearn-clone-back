import * as passport from 'passport';
import * as bcrypt from 'bcrypt';

import { Strategy } from 'passport-local';
import User from '../models/user';

export default () => {
    passport.use('local', new Strategy({
        usernameField: 'userId', 
        passwordField: 'passWord', 
    }, async (userId, passWord, done) => {
        try {
            const userInfo = await User.findOne({ where: { userId }}); 
            if (!userInfo) {
                return done(null, false, { message: '존재 하지 않은 사용자 입니다!'}); 
            } 
            const comparison = await bcrypt.compare(passWord, userInfo.passWord);
            if (comparison) {
                return done(null, userInfo); 
            } 
            return done(null, false, { message: '비밀번호가 틀립니다!'}); 
        } catch (e) {
            console.error(e); 
            return done(e); 
        } 
    }));
}

import  User  from '../models/user';
import { Strategy } from 'passport-local';

export default () => {
    passport.use('local', new Strategy({
        usernameField: 'userId',
        passwordField: 'passWord', 
    }, async (userId, passWord, done) => {
        try {
            const user = await User.findOne({ where: { userId }}); 
            if (!user) {
                return done(null, false, { message: '존재하지 않은 사람입니다.'}); 
            }
            const result = await bcrypt.compare(passWord, user.passWord);
            if (result) {
                return done(null, user); 
            }
            return done(null, false, { message: '비밀번호가 틀렸습니다!'});
        } catch (e) {
            console.error(e);
            return done(e); 
        }
    }));
};
