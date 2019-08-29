import express from 'express';
// eslint-disable-next-line import/no-unresolved
import signupController from '../controllers/signup';
import signinController from '../controllers/signin';
import changerUserController from '../controllers/changeUser';
import mentorsController from '../controllers/mentors';
import specificMentorController from '../controllers/specificMentor';
import requestSessionController from '../controllers/requestSession';
import acceptRequestController from '../controllers/acceptRequest';
import rejectRequestController from '../controllers/rejectRequest';
import sessionsController from '../controllers/sessions';
import allUsersController from '../controllers/allUsers';
import reviewController from '../controllers/reviews';
import deleteReviewController from '../controllers/deleteReview';

const route = express();

route.use('/api/v1/auth', signupController);
route.use('/api/v1/auth', signinController);
route.use('/api/v1', changerUserController);
route.use('/api/v1', mentorsController);
route.use('/api/v1', specificMentorController);
route.use('/api/v1', requestSessionController);
route.use('/api/v1', acceptRequestController);
route.use('/api/v1', rejectRequestController);
route.use('/api/v1', sessionsController);
route.use('/api/v1', allUsersController);
route.use('/api/v1', reviewController);
route.use('/api/v1', deleteReviewController);

export default route;
