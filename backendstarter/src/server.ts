import express, { Request, Response, NextFunction, Application } from 'express';
import cors from 'cors';
import createError from 'http-errors';
import config from './config/index';
import cookieParser from 'cookie-parser';

// Require Loaders
require('./loaders/mongoose');
require('./loaders/redis');

// Dotenv Configuration
require('dotenv').config();

// Require Routes
const authRoute = require('./api/routes/auth');

// Initialize App
const app: Application = express();

// Cross-Origin Resource Sharing | So the frontend can request & respond with data
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

// Express Bodyparser | This line of code transforms our code into JSON
app.use(express.json());

// Cookie-Parser
app.use(cookieParser());

// Use the Routes
app.use('/user', authRoute);

// Error handler
app.use(async (req: Request, res: Response, next: NextFunction) => {
  next(new createError.NotFound());
});

app.use(
  (
    err: { status: number; message: string },
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    res.status(err.status || 500);
    res.send({
      error: {
        status: err.status || 500,
        message: err.message,
      },
    });
  }
);

app.listen(config.port, () => {
  console.log(`🚨 Server is running on port: ${config.port} 🚨`);
});
