/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import chai from 'chai';
import chaihttp from 'chai-http';
import app from '../../../app';
import token from '../helpers/dummyToken';
import session from '../helpers/dummySessions/dummyRequest';

chai.should();

chai.use(chaihttp);

describe('/POST Request mentorship session to mentor', () => {
  it('App should check if a user token is valid', (done) => {
    chai.request(app)
      .post('/api/v2/sessions')
      .set('Authorization', token.fakeUserToken)
      .then((res) => {
        res.body.status.should.be.equal(403);
        done();
      })
      .catch((err) => done(err));
  });

  it('App should allow user to request mentorship session to a mentor', (done) => {
    chai.request(app)
      .post('/api/v2/sessions')
      .set('Authorization', token.userToken)
      .send(session[0])
      .then((res) => {
        res.body.status.should.be.equal(201);
        done();
      })
      .catch((err) => done(err));
  });

  it('App should check if a user is allowed to access the route', (done) => {
    chai.request(app)
      .post('/api/v2/sessions')
      .set('Authorization', token.mentorToken)
      .then((res) => {
        res.body.status.should.be.equal(403);
        done();
      })
      .catch((err) => done(err));
  });

  it('App should check field bad request', (done) => {
    chai.request(app)
      .post('/api/v2/sessions')
      .set('Authorization', token.userToken)
      .send(session[1])
      .then((res) => {
        res.body.status.should.be.equal(400);
        done();
      })
      .catch((err) => done(err));
  });

  it('App should check if a user ID exists', (done) => {
    chai.request(app)
      .post('/api/v2/sessions')
      .set('Authorization', token.userToken)
      .send(session[2])
      .then((res) => {
        res.body.status.should.be.equal(404);
        done();
      })
      .catch((err) => done(err));
  });

  it('App should check if a user has set token', (done) => {
    chai.request(app)
      .post('/api/v2/sessions')
      .then((res) => {
        res.body.status.should.be.equal(403);
        done();
      }).catch((err) => done(err));
  });
});
