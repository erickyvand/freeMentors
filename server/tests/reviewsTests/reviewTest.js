/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import chai from 'chai';
import chaihttp from 'chai-http';
import app from '../../../app';
import token from '../helpers/dummyToken';
import review from '../helpers/dummyReviews/dummyReviews';

should = chai.should();

chai.use(chaihttp);

describe('/POST User review mentor for mentorship session', () => {
  it('App should check if mentee has set headers token', (done) => {
    chai.request(app)
      .post('/api/v2/sessions/1/review')
      .then((res) => {
        res.body.status.should.be.equal(403);
        done();
      })
      .catch((err) => done(err));
  });

  it('App should check if a mentee token is valid', (done) => {
    chai.request(app)
      .post('/api/v2/sessions/1/review')
      .set('Authorization', token.fakeUserToken)
      .then((res) => {
        res.body.status.should.be.equal(403);
        done();
      })
      .catch((err) => done(err));
  });

  it('App should check route access', (done) => {
    chai.request(app)
      .post('/api/v2/sessions/1/review')
      .set('Authorization', token.mentorToken)
      .then((res) => {
        res.body.status.should.be.equal(403);
        done();
      })
      .catch((err) => done(err));
  });

  it('App should show admin all reviews', (done) => {
    chai.request(app)
      .post('/api/v2/sessions/1/review')
      .set('Authorization', token.adminToken)
      .then((res) => {
        res.body.status.should.be.equal(200);
        done();
      })
      .catch((err) => done(err));
  });

  it('App should check if the given session ID exists', (done) => {
    chai.request(app)
      .post('/api/v2/sessions/99/review')
      .set('Authorization', token.userToken)
      .then((res) => {
        res.body.status.should.be.equal(404);
        done();
      })
      .catch((err) => done(err));
  });

  it('App should check if is the right user who requested', (done) => {
    chai.request(app)
      .post('/api/v2/sessions/9/review')
      .set('Authorization', token.userToken)
      .then((res) => {
        res.body.status.should.be.equal(401);
        done();
      })
      .catch((err) => done(err));
  });

  it('App should check rejected status should not reviewed', (done) => {
    chai.request(app)
      .post('/api/v2/sessions/2/review')
      .set('Authorization', token.userToken)
      .then((res) => {
        res.body.status.should.be.equal(401);
        done();
      })
      .catch((err) => done(err));
  });

  it('App should check field input to be valid', (done) => {
    chai.request(app)
      .post('/api/v2/sessions/3/review')
      .set('Authorization', token.userToken)
      .send(review[0])
      .then((res) => {
        res.body.status.should.be.equal(400);
        done();
      })
      .catch((err) => done(err));
  });

  it('App should create review', (done) => {
    chai.request(app)
      .post('/api/v2/sessions/8/review')
      .set('Authorization', token.userToken)
      .send(review[1])
      .then((res) => {
        res.body.status.should.be.equal(201);
        done();
      })
      .catch((err) => done(err));
  });
});
