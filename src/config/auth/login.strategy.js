import { Strategy } from 'passport-local';
import { loginUser } from '../../domain/services/user.service.js';
import events from '../../events/index.js';

const loginStrategy = new Strategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: false,
  },
  async (email, password, done) => {
    await loginUser({email, password, done});
  },
);

export default loginStrategy;
