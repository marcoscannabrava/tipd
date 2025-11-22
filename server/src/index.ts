import 'reflect-metadata';
import express from 'express';
import { createConnection } from 'typeorm';
import { User } from './entity/User';
import "dotenv/config"
import passport from './config/passport';
import authRoutes from './routes/auth';
import paymentRoutes from './routes/payment';

createConnection()
  .then(async () => {
    const app = express();
    app.use(express.json());
    app.use(passport.initialize());

    app.use('/auth', authRoutes);
    app.use('/payment', paymentRoutes);

    const PORT = process.env.PORT || 3000;

    app.get('/', (req, res) => {
      res.send('Hello, world!');
    });

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
