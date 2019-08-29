/* eslint-disable no-trailing-spaces */
/* eslint-disable radix */
import express from 'express';
import jwt from 'jsonwebtoken';
import users from '../models/user';
import verifyToken from '../middleware/verifyToken';
import sessions from '../models/session';

const router = express.Router();

router.post('/sessions', verifyToken, (req, res, next) => {
  jwt.verify(req.token, process.env.AUTH_KEY, (err, loggedUser) => {
    const user = users.find((c) => c.id === parseInt(req.body.id));
    const findRequest = sessions.find((s) => s.sessionName === req.body.sessionName);

    const session = {
      sessionId: sessions.length + 1,
      sessionName: req.body.sessionName,
      mentorId: req.body.id,
      questions: req.body.questions,
      status: 'pending',
    };

    if (err) {
      res.status(403).json({
        status: 403,
        error: 'Forbidden',
      });
    // check if the logged user is a user  
    } else if (loggedUser.user.user_type !== 'user') {
      res.status(403).json({
        status: 403,
        error: 'You are not allowed to access this route',
      });
    // check if session name is empty  
    } else if (req.body.sessionName === '') {
      res.status(400).json({
        status: 400,
        error: 'Session Name is required',
      });
      next();
    // session name length must be 3 characters long  
    } else if (req.body.sessionName.length < 3) {
      res.status(400).json({
        status: 400,
        error: 'Session Name must be atleast 3 characters long',
      });
      next();
    // check if the id exists in users  
    } else if (!user) {
      res.status(404).json({
        status: 404,
        error: 'The given Id does not exits',
      });
    // check if the existed Id is mentor's Id  
    } else if (user.user_type !== 'mentor') {
      res.status(404).json({
        status: 404,
        error: 'The given Id is not mentor\'s ID',
      });
    // find if the request was made before 
    } else if (findRequest) {
      res.status(401).json({
        status: 401,
        error: 'This request was made before',
      });
    } else {
      // push request 
      sessions.push(session);
  
      res.status(200).json({
        status: 200,
        data: {
          sessionId: session.sessionId,
          mentorId: session.mentorId,
          menteeId: loggedUser.user.id,
          questions: session.questions,
          menteeEmail: loggedUser.user.email,
          status: session.status,
        },
      });
    }
  });
});

export default router;