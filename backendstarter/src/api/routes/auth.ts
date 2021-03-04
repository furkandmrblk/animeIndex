import { Router, Request, Response, NextFunction } from 'express';
import User from '../../models/User';
import createError from 'http-errors';
import bcrypt from 'bcrypt';
import { loginValidation, registerValidation } from '../middlewares/validation';

const {
  createAccessToken,
  createRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
} = require('../../services/generateTokens');

const client = require('../../loaders/redis');

const router = Router();

// Registration
router.post(
  '/register',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Joi Validation for Registration
      const result = await registerValidation.validateAsync(req.body);

      // Does the email already exist?
      const emailExists = await User.findOne({ email: result.email });
      if (emailExists)
        throw new createError.Conflict(
          `${result.email} has already been registered`
        );

      // After all these validations the User really deserves to be saved in the database ;)
      const user = new User(result);
      const savedUser = await user.save();

      res.send(savedUser);
    } catch (error) {
      // If the error comes from our Joi Validation, then we want to send the status code 422: Unprocessable Entity
      if (error.isJoi === true) error.status = 422;
      next(error);
    }
  }
);

// Login
router.post(
  '/login',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Joi Validation for Login
      const result = await loginValidation.validateAsync(req.body);

      // Does the email exist?
      const user = await User.findOne({ email: result.email });
      if (!user) throw new createError.NotFound('User is not registered');

      // Check if the password is valid
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword)
        throw new createError.Unauthorized('Invalid username or password');

      // Create access & refresh Tokens for the User
      const accessToken = await createAccessToken(user.id);
      const refreshToken = await createRefreshToken(user.id);

      // res.send({ accessToken, refreshToken });
      res.status(202).cookie('token', accessToken, {
        sameSite: 'strict',
        path: '/',
        httpOnly: true,
      });
      res.status(202).cookie('token2', refreshToken, {
        sameSite: 'strict',
        path: '/',
        httpOnly: true,
      });
      res.send('🍪 Cookies created 🍪');
    } catch (error) {
      // We again check if the error comes from Joi. If so, then we will send a bad request status code to the User
      if (error.isJoi === true)
        return next(new createError.BadRequest('Invalid username or password'));
      next(error);
    }
  }
);

// Refreshtoken
router.post(
  '/refresh-token',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // We need the refreshtoken in order to verify the refreshtoken and create a new one
      const { refreshToken } = req.body;
      if (!refreshToken) throw new createError.BadRequest();

      // If we have the refreshtoken, we will verify the refreshtoken
      const userId = await verifyRefreshToken(refreshToken);

      // If everything goes well, we will create a new pair of access- & refreshtokens for the user
      const accessToken = await createAccessToken(userId);
      const refToken = await createRefreshToken(userId);

      // send the new created access- & refreshtoken to the frontend
      res.send({ accessToken: accessToken, refreshToken: refToken });
    } catch (error) {
      next(error);
    }
  }
);

// Logout
router.post(
  '/logout',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Get the refreshtoken from the frontend and verify it.
      const { refreshToken } = req.body;
      if (!refreshToken) throw new createError.BadRequest();
      const userId = await verifyRefreshToken(refreshToken);

      // Delete / Blackmail the refreshtoken in the redis client
      client.DEL(userId, (err: { message: string }, value: number) => {
        if (err) {
          console.log(err.message);
          throw new createError.InternalServerError();
        }
        console.log(value);
        res.sendStatus(204);
      });
    } catch (error) {
      next(error);
    }
  }
);

// Delete Cookie
router.get(
  '/deleteCookie',
  async (req: Request, res: Response, next: NextFunction) => {
    res.clearCookie('token');
    res.clearCookie('token2');
    res.status(204).send('🍪 Cookies cleared 🍪');
  }
);

module.exports = router;
