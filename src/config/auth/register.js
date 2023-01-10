import { Strategy } from 'passport-local';
import Logger from '../../loaders/logger.js';
import EE from '../../loaders/eventEmitter.js';
import { checkIfUserExists } from '../../domain/users.js';
import events from '../../events/index.js';

const registerStrategy = new Strategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  },
  async (req, email, password, done) => {
    try {
      const user = await checkIfUserExists(email, done);

      if (user) {
        const error = new Error('El usuario ya existe');
        error.status = 409;
        return done(error)
      }
      
      EE.emit(events.user.register, {...req.body, done});
    } catch (error) {
      Logger.error('%o', error);
      return done(error);
    }
  },
);

export default registerStrategy;
