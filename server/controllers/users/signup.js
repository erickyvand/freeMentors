/* eslint-disable no-trailing-spaces */
import express from 'express';
import bcrypt from 'bcrypt';
import Joi from 'joi';
import client from '../../config/config';
import { handleErrors } from '../../utils';

const router = express.Router();

router.post('/signup', (req, res) => {
  // Validate inputs
  const schema = Joi.object({
    first_name: Joi.string().alphanum().min(3).max(30)
      .required(),
    last_name: Joi.string().alphanum().min(3).max(30)
      .required(),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    password: Joi.string().regex(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    ).required(),
    address: Joi.string().min(3).max(30).required(),
    bio: Joi.string().required(),
    occupation: Joi.string().min(3).max(30).required(),
    expertise: Joi.string().min(3).max(30).required(),
  }).options({ abortEarly: false });

  const { error } = schema.validate(req.body);

  // hash password
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    //  if(err) throw err;
    const user = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: hash,
      address: req.body.address,
      bio: req.body.bio,
      occupation: req.body.occupation,
      expertise: req.body.expertise,
    };

    const query = {
      text: 'SELECT * FROM users WHERE email = $1',
      values: [user.email],
    };

    client.query(query).then((results) => {
      if (error) {
        handleErrors(error, res);
      } else if (results.rows && results.rows.length > 0) {
        // there is data in the DB
        res.status(409).json({
          status: 409,
          error: 'Email already exists',
        });
      } else {
        client.query(
          'INSERT INTO users(first_name, last_name, email, password, address, bio, occupation, expertise) VALUES($1, $2, $3, $4, $5, $6, $7, $8)',
          [
            user.first_name,
            user.last_name,
            user.email,
            user.password,
            user.address,
            user.bio,
            user.occupation,
            user.expertise,
          ],
          () => {
            res.status(201).json({
              status: 201,
              message: 'Account created successfully',
              data: {
                user: {
                  firstName: user.first_name,
                  lastName: user.last_name,
                },
              },
            });
          },
        );
      }
    });
  });
});

export default router;
