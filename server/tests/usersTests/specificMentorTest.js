/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import chai from 'chai';
import chaihttp from 'chai-http';
import app from '../../../app';
import token from '../helpers/dummyToken';

chai.should();

chai.use(chaihttp);

describe('/GET View specific mentor', () => {
  it('App should allow user to view a specific mentor', (done) => {
    chai.request(app)
      .get('/api/v2/mentors/3')
      .set('Authorization', token.userToken)
      .then((res) => {
        res.body.status.should.be.equal(200);
        done();
      })
      .catch((err) => done(err));
  });

  it('App should check the allowed user to access the route', (done) => {
    chai.request(app)
      .get('/api/v2/mentors/3')
      .set('Authorization', token.mentorToken)
      .then((res) => {
        res.body.status.should.be.equal(403);
        done();
      })
      .catch((err) => done(err));
  });

  it('App should check if the user token is correct', (done) => {
    chai.request(app)
      .get('/api/v2/mentors/3')
      .set('Authorization', token.fakeUserToken)
      .then((res) => {
        res.body.status.should.be.equal(403);
        done();
      })
      .catch((err) => done(err));
  });

  it('App should check if the user has set token', (done) => {
    chai.request(app)
      .get('/api/v2/mentors/3')
      .then((res) => {
        res.status.should.be.equal(403);
        done();
      })
      .catch((err) => done(err));
  });

  it('App should check if the given ID exists', (done) => {
    chai.request(app)
      .get('/api/v2/mentors/99')
      .set('Authorization', token.userToken)
      .then((res) => {
        res.body.status.should.be.equal(404);
        done();
      })
      .catch((err) => done(err));
  });

  it('App should check if user ID is a mentor ID', (done) => {
    chai.request(app)
      .get('/api/v2/mentors/1')
      .set('Authorization', token.userToken)
      .then((res) => {
        res.body.status.should.be.equal(400);
        done();
      })
      .catch((err) => done(err));
  });
});
