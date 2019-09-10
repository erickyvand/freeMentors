/* eslint-disable no-undef */
import chai from 'chai';
import chaihttp from 'chai-http';
import dotenv from 'dotenv';
import app from '../../../app';
import user from '../helpers/dummyUsers/dummySignup';

dotenv.config();

chai.should();

chai.use(chaihttp);

describe('/POST admin signup', () => {
  it('App should check admin bad request to the field', (done) => {
    chai.request(app)
      .post(`/api/v2/auth/${process.env.SECRET_ROUTE}`)
      .send(user[0])
      .then((res) => {
        res.body.status.should.be.equal(400);
        done();
      })
      .catch((err) => done(err));
  });

  it('App should check if email exists', (done) => {
    chai.request(app)
      .post(`/api/v2/auth/${process.env.SECRET_ROUTE}`)
      .send(user[1])
      .then((res) => {
        res.body.status.should.be.equal(409);
        done();
      })
      .catch((err) => done(err));
  });

  it('App should create a admin', (done) => {
    chai.request(app)
      .post(`/api/v2/auth/${process.env.SECRET_ROUTE}`)
      .send(user[2])
      .then((res) => {
        res.body.status.should.be.equal(201);
        done();
      })
      .catch((err) => done(err));
  });
});
