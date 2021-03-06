/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import chai from 'chai';
import chaihttp from 'chai-http';
import app from '../../../app';
import token from '../helpers/dummyToken';

should = chai.should();

chai.use(chaihttp);

describe('/PATCH Mentor reject mentorship session from user', () => {
  it('App should check if a user token is valid', (done) => {
    chai.request(app)
      .patch('/api/v2/sessions/1/reject')
      .set('Authorization', token.fakeMentorToken)
      .then((res) => {
        res.body.status.should.be.equal(403);
        done();
      })
      .catch((err) => done(err));
  });

  it('App should check if a logged user is a mentor', (done) => {
    chai.request(app)
      .patch('/api/v2/sessions/1/reject')
      .set('Authorization', token.userToken)
      .then((res) => {
        res.body.status.should.be.equal(403);
        done();
      })
      .catch((err) => done(err));
  });

  it('App should check if the given session ID exists', (done) => {
    chai.request(app)
      .patch('/api/v2/sessions/99/reject')
      .set('Authorization', token.mentorToken)
      .then((res) => {
        res.body.status.should.be.equal(404);
        done();
      })
      .catch((err) => done(err));
  });

  it('App should check if the logged mentor ID matches the requested mentor ID', (done) => {
    chai.request(app)
      .patch('/api/v2/sessions/4/reject')
      .set('Authorization', token.mentorToken)
      .then((res) => {
        res.body.status.should.be.equal(403);
        done();
      })
      .catch((err) => done(err));
  });

  it('App should check if the requested session was accepted before', (done) => {
    chai.request(app)
      .patch('/api/v2/sessions/5/reject')
      .set('Authorization', token.mentorToken)
      .then((res) => {
        res.body.status.should.be.equal(401);
        done();
      })
      .catch((err) => done(err));
  });

  it('App should check if the requested session was rejected before', (done) => {
    chai.request(app)
      .patch('/api/v2/sessions/2/reject')
      .set('Authorization', token.mentorToken)
      .then((res) => {
        res.body.status.should.be.equal(409);
        done();
      })
      .catch((err) => done(err));
  });

  it('App should update the requested to rejected', (done) => {
    chai.request(app)
      .patch('/api/v2/sessions/7/reject')
      .set('Authorization', token.mentorToken)
      .then((res) => {
        res.body.status.should.be.equal(200);
        done();
      })
      .catch((err) => done(err));
  });

  it('App should check if mentor has set headers token', (done) => {
    chai.request(app)
      .patch('/api/v2/sessions/3/reject')
      .then((res) => {
        res.body.status.should.be.equal(403);
        done();
      })
      .catch((err) => done(err));
  });
});
