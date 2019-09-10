/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import chai from 'chai';
import chaihttp from 'chai-http';
import app from '../../../app';
import token from '../helpers/dummyToken';

chai.should();

chai.use(chaihttp);

describe('/GET Get all mentors', () => {
  it('App should allow user to get all mentors', (done) => {
    chai.request(app)
      .get('/api/v2/mentors')
      .set('Authorization', token.userToken)
      .then((res) => {
        res.body.status.should.be.equal(200);
        done();
      })
      .catch((err) => done(err));
  });

  it('App should check the allowed user to access the route', (done) => {
    chai.request(app)
      .get('/api/v2/mentors')
      .set('Authorization', token.mentorToken)
      .then((res) => {
        res.body.status.should.be.equal(403);
        done();
      })
      .catch((err) => done(err));
  });

  it('App should check if the user token is correct', (done) => {
    chai.request(app)
      .get('/api/v2/mentors')
      .set('Authorization', token.fakeUserToken)
      .then((res) => {
        res.body.status.should.be.equal(403);
        done();
      })
      .catch((err) => done(err));
  });

  it('App should check if the user has set token', (done) => {
    chai.request(app)
      .get('/api/v2/mentors')
      .then((res) => {
        res.status.should.be.equal(403);
        done();
      })
      .catch((err) => done(err));
  });
});
