/* eslint-disable no-trailing-spaces */
import express from 'express';
import jwt from 'jsonwebtoken';
import users from '../models/user';
import verifyToken from '../middleware/verifyToken';


const router = express.Router();

router.get('/mentors', verifyToken, (req, res) => {
  jwt.verify(req.token, process.env.AUTH_KEY, (err, loggedUser) => {
    const user = users.filter((s) => s.user_type === 'mentor');

    if (err) {
      res.status(403).json({
        status: 403,
        error: 'Forbidden',
      });
    // protect the route against unauthorized  
    } else if (loggedUser.user.user_type === 'mentor') {
      res.status(403).json({
        status: 403,
        error: 'You are not allowed to access this route',
      });
    } else {
      // display mentors
      res.status(200).json({
        status: 200,
        data: [
          {
            user,
          },
        ],
      });
    }
  });
});

export default router;
