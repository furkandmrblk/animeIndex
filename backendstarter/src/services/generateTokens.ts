import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import createError from 'http-errors';
import config from '../config/index';

const client = require('../loaders/redis');

module.exports = {
  createAccessToken: (userId: string) => {
    return new Promise((resolve, reject) => {
      const payload = {};
      const secret = config.accessTokenSecret;
      const options = {
        expiresIn: '5m',
        // issuer: 'http://localhost:3000',
        audience: userId,
      };

      // Assign the accesstoken to the user
      jwt.sign(
        payload,
        secret,
        options,
        (err: { message: string }, token: string) => {
          if (err) {
            console.log(err.message);
            reject(new createError.InternalServerError());
            return;
          }
          resolve(token);
        }
      );
    });
  },
  verifyAccessToken: (req: any, res: Response, next: NextFunction) => {
    // We're checking if the header contains the accesstoken in the authorization header
    if (!req.headers['authorization'])
      return next(new createError.Unauthorized());

    // Now we need to split the Bearer Token to get the accesstoken
    const authHeader = req.headers['authorization'];
    const bearerToken = authHeader.split(' ');
    const token = bearerToken[1];

    // Now that we got the accesstoken let's verify the jwt token
    jwt.verify(
      token,
      config.accessTokenSecret,
      (err: { name: string; message: string }, payload: any) => {
        if (err) {
          // Here we are checking if the error comes from jsonwebtoken. If so then we don't want to display the error message.
          const message =
            err.name === 'JsonWebTokenError' ? 'Unauthorized' : err.message;
          return next(new createError.Unauthorized(message));
        }
        req.payload = payload;
        next();
      }
    );
  },

  createRefreshToken: (userId) => {
    return new Promise((resolve, reject) => {
      const payload = {};
      const secret = config.refreshTokenSecret;
      const options = {
        expiresIn: '1y',
        //   issuer: 'http://localhost:3000'
        audience: userId,
      };

      // Assign the refreshtoken to the user
      jwt.sign(
        payload,
        secret,
        options,
        (err: { message: string }, token: string) => {
          if (err) {
            console.log(err.message);
            reject(new createError.InternalServerError());
            return;
          }

          // Set the refreshtoken for the Redis-Client
          client.SET(
            userId,
            token,
            'EX',
            365 * 24 * 60 * 60,
            (err: { message: string }) => {
              if (err) {
                console.log(err.message);
                reject(new createError.InternalServerError());
                return;
              }
            }
          );
          resolve(token);
        }
      );
    });
  },

  verifyRefreshToken: (refreshToken: string) => {
    return new Promise((resolve, reject) => {
      // Verify the refreshtoken
      jwt.verify(
        refreshToken,
        config.refreshTokenSecret,
        (error, payload: any) => {
          if (error) return reject(new createError.Unauthorized());
          const userId = payload.aud;

          // Get the refreshtoken from the Redis-Client
          client.GET(userId, (err: { message: string }, result) => {
            if (err) {
              console.log(err.message);
              reject(new createError.InternalServerError());
              return;
            }
            if (refreshToken === result) return resolve(userId);
            reject(new createError.Unauthorized());
          });
        }
      );
    });
  },
};
