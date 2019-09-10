/* eslint-disable no-undef */
import chai from 'chai';
import chaihttp from 'chai-http';
import app from '../../../app';
import user from '../helpers/dummyUsers/dummySignup';

chai.should();

chai.use(chaihttp);

describe('/POST signup', () => {
  it('App should create a user', (done) => {
    chai.request(app)
      .post('/api/v2/auth/signup')
      .send(user[3])
      .then((res) => {
        res.body.status.should.be.equal(201);
        done();
      })
      .catch((err) => done(err));
  });

  it('App should check bad request to the field', (done) => {
    chai.request(app)
      .post('/api/v2/auth/signup')
      .send(user[0])
      .then((res) => {
        res.body.status.should.be.equal(400);
        done();
      })
      .catch((err) => done(err));
  });

  it('App should check if email exists', (done) => {
    chai.request(app)
      .post('/api/v2/auth/signup')
      .send(user[1])
      .then((res) => {
        res.body.status.should.be.equal(409);
        done();
      })
      .catch((err) => done(err));
  });
});
