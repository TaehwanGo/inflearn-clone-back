import * as passport from 'passport';
import * as bcrypt from 'bcrypt';
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