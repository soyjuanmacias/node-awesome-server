import passport from 'passport';
import registerStrategy from './register.js';
import loginStrategy from './login.js';
import { getUserById } from '../../domain/users.js';

passport.serializeUser((user, done) => {
  return done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const logged = await getUserById(id);
    return done(null, logged);
  } catch (error) {
    return done(error);
  }
});

const config = () => {
  passport.use('login', loginStrategy);
  passport.use('register', registerStrategy);
};

export default { config };
