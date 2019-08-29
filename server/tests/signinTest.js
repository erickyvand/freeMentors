import chai from 'chai';
import chaihttp from 'chai-http';
import app from '../../app';

// eslint-disable-next-line no-unused-vars
const should = chai.should();

chai.use(chaihttp);

// eslint-disable-next-line no-undef
describe('/POST signin', () => {
  // eslint-disable-next-line no-undef
  it('App should login a user', (done) => {
    const user = {
      email: 'ericky@gmail.com',
      password: '123456',
    };

    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(user)
      .then((res) => {
        res.body.status.should.be.equal(200);
        done();
      })
      .catch((err) => done(err));
  });

  // eslint-disable-next-line no-undef
  it('App should check unauthorized user', (done) => {
    const user = {
      email: 'ericky@gmail.com',
      password: '12345',
    };

    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(user)
      .then((res) => {
        res.body.status.should.be.equal(401);
        done();
      })
      .catch((err) => done(err));
  });

  // eslint-disable-next-line no-undef
  it('App should check if user exists', (done) => {
    const user = {
      email: 'erickyffad@gmail.com',
      password: '123456',
    };

    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(user)
      .then((res) => {
        res.body.status.should.be.equal(404);
        done();
      })
      .catch((err) => done(err));
  });
});
