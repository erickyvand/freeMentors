/* eslint-disable camelcase */
/* eslint-disable no-trailing-spaces */
/* eslint-disable radix */
import express from 'express';
import jwt from 'jsonwebtoken';
import verifyToken from '../../middleware/verifyToken';
import client from '../../config/config';

const router = express.Router();

router.get('/mentees', verifyToken, (req, res) => {
  jwt.verify(req.token, process.env.AUTH_KEY, (err, loggedUser) => {
    if (err) {
      res.status(403).json({
        status: 403,
        error: 'Forbidden',
      });
    // check if the logged user is a mentor  
    } else if (loggedUser.userIn.user_type === '0') {
      res.status(403).json({
        status: 403,
        error: 'You are not allowed to access this route',
      });
    } else {
      const userType = '0';
      client.query('SELECT * FROM users WHERE user_type = $1 ORDER BY id', [userType]).then((results) => {
        res.status(200).json({
          status: 200,
          users: results.rows,
        });
      });
    }
  });
});

export default router;
