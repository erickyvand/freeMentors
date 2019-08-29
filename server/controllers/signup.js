import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Joi from '@hapi/joi';
import users from '../models/user';


const router = express.Router();

router.post('/signup', (req, res) => {
  const findEmail = users.find((s) => s.email === req.body.email);

  // Validate inputs
  const schema = {
    first_name: Joi.string().alphanum().min(3).max(30)
      .required(),
    last_name: Joi.string().alphanum().min(3).max(30)
      .required(),
    email: Joi.string().email({ minDomainSegments: 2 }),
    password: Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/),
    address: Joi.string().min(3).max(30).required(),
    bio: Joi.string().required(),
    occupation: Joi.string().min(3).max(30).required(),
    expertise: Joi.string().min(3).max(30).required(),
  };

  const result = Joi.validate(req.body, schema);

  // hash password
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    //  if(err) throw err;
    const user = {
      id: users.length + 1,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: hash,
      address: req.body.address,
      bio: req.body.bio,
      occupation: req.body.occupation,
      expertise: req.body.expertise,
      user_type: 'user',
    };

    if (result.error) {
      res.status(400).json({
        status: 400,
        error: result.error.details[0].message,
      });
      // next();
    } else if (findEmail) {
      res.status(409).json({
        status: 409,
        error: 'Email already exists',
      });
      // next();
    } else {
      users.push(user);
    }

    // Asign token to created user
    jwt.sign({ user }, 'secretkey', (_err, token) => {
      // if(err) throw err;
      res.status(201).json({
        status: 201,
        message: 'User created successfully',
        data: {
          token,
          user,
          message: 'User created successfully',
        },
      });
    });
  });
});

export default router;