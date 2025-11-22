import { Router } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../entity/User';
import passport from '../config/passport';

const router = Router();

// Register a new user
router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    const userRepository = getRepository(User);

    const existingUser = await userRepository.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = userRepository.create({
      email,
      password: hashedPassword,
    });

    await userRepository.save(user);
    res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error.' });
  }
});

// Login a user
router.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
  const user = req.user as User;
  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET!, {
    expiresIn: '1h',
  });
  res.json({ token });
});

export default router;
