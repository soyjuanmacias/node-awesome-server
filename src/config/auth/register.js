// import bcrypt from 'bcrypt';
import { Strategy } from 'passport-local';
import { checkIfUserExists } from '../../domain/users.js';
import Logger from '../../loaders/logger.js';

const saltRounds = 10;

const registerStrategy = new Strategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: false,
  },
  async (email, password, done) => {
    try {
      Logger.info('🚀 ~ file: register.js ~ comprobando si existe %o', email);
      const user = await checkIfUserExists(email, done);
      Logger.info('🚀 ~ file: register.js ~ usuario %o', user);
      
      if (user) {
        const error = new Error('El usuario ya existe');
        error.status = 409;
        throw error;
      }

      // const encryptedPassword = await bcrypt.hash(password, saltRounds);
      // Logger.debug('🚀 ~ file: register.js ~ line 38 ~ encryptedPassword %o', encryptedPassword);

      // const user = new User({
      //   ...req.body,
      //   email,
      //   password: encryptedPassword,
      // });

      // const userDB = await user.save();

      // userDB.password = 'Jaque Mate maligno, no transferimos contraseñass';

      // return done(null, userDB);
    } catch (error) {
      return done(error.message);
    }
  },
);

export default registerStrategy;
