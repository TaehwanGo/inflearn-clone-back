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