import { Strategy } from 'passport-local';

const loginStrategy = new Strategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: false,
  },
  async (email, password, done) => {
    // TODO Extraer a lógica de servicio (validators)
    // if (!isValidEmail(email) || !isValidPassword(password)) {
    //   const error = new Error('El email o la contraseña no tienen un formato válido');
    //   return done(error, null);
    // }

    // // TODO: Extraer a lógica de dominio
    // const existingUser = await User.findOne({ email });

    // // TODO Extraer a lógica de dominio. Si al buscar el usuario no existe, la función trabaja sola rechazando petición
    // if (!existingUser) {
    //   const error = new Error('El usuario no existe');
    //   return done(error, null);
    // }

    // // TODO Extraer a lógica de servicio (validators)
    // const isValidUserPassword = await bcrypt.compare(password, existingUser.password);

    // // TODO Extraer a lógica de dominio. Si la contraseña no es válida, la función trabaja sola rechazando petición
    // if (!isValidUserPassword) {
    //   const error = new Error('La contraseña no coincide');
    //   error.status = 401;
    //   return done(error, null);
    // }

    // // TODO reflect en lugar de setear a null. (o lean() para parsear a objeto plano)
    // existingUser.password = null;

    // TODO Devolvemos el usuario a la lógica de dominio
    return done(null, existingUser);
  },
);

export default loginStrategy;
