import * as passport from 'passport';

import Lecture from '../models/lecture';
import User from '../models/user';
import local from './local';

export default () => {
    passport.serializeUser((user: User, done) =>   
        done(null, user.id); 
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