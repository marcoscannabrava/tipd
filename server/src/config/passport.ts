import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { getRepository } from 'typeorm';
import bcrypt from 'bcrypt';
import { User } from '../entity/User';

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, password, done) => {
      try {
        const userRepository = getRepository(User);
        const user = await userRepository.findOne({ where: { email } });

        if (!user) {
          return done(null, false, { message: 'Incorrect email or password.' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return done(null, false, { message: 'Incorrect email or password.' });
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

export default passport;
