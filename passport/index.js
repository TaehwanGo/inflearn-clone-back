const passport = require('passport');
const local = require('./local')
const { User } = require('../models');

module.exports = () => {
  passport.serializeUser((user, done) => {  // req.login 정보가 들어감.
    done(null, user.id); // 1. 서버 에러  2. 성공  
    // session 에 user의 id만 저장. 
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({ where: { id }});
      done(null, user); // req.user  1. 서버 에러  2. 성공 
    } catch (error) {
      console.error(error);
      done(error);
    }
  });

  local();
};
