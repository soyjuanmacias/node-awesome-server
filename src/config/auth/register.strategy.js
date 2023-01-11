import { Strategy } from 'passport-local';
import Logger from '../../loaders/logger.js';
import events from '../../events/index.js';
import { registerUser } from '../../domain/services/user.service.js';

const registerStrategy = new Strategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  },
  async (req, email, password, done) => {
    try {
      await registerUser({...req.body, done});
    } catch (error) {
      Logger.error('%o', error);
      return done(error);
    }
  },
);

export default registerStrategy;
