import * as passport from 'passport';

import Post from '../models/post';
import User from '../models/user';
import local from './local';

export default () => {
    passport.serializeUser((user: User, done) =>   // req.login 정보가 들어감.
        done(null, user.id); // 1. 서버 에러  2. 성공  
        // session 에 user의 id만 저장. 
      );
     
    passport.deserializeUser(async (id: number, done) => {
        try {
            const user = await User.findOne({ where: { id }}); 
            done(null, user); 
        } catch (error) {
            console.error(error);
            done(error); 
        };
    });

    local(); 
};