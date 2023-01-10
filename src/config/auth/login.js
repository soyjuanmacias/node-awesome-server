import { Strategy } from 'passport-local';
import EE from '../../loaders/eventEmitter.js';
import events from '../../events/index.js';

const loginStrategy = new Strategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  },
  async (req, email, password, done) => {
    EE.emit(events.user.login, { email, password , done });

    // return done(null, existingUser);
  },
);

export default loginStrategy;
