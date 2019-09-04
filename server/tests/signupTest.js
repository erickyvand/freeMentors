import chai from 'chai';
import chaihttp from 'chai-http';
import app from '../../app';

// eslint-disable-next-line no-unused-vars
const should = chai.should();

chai.use(chaihttp);

// eslint-disable-next-line no-undef
describe('/POST signup', () => {
  // eslint-disable-next-line no-undef
  it('App should create a user', (done) => {
    const user = {
      first_name: 'Anthony',
      last_name: 'Martial',
      email: 'anthony@gmail.com',
      password: 'Ab1234567@',
      address: 'Kigali',
      bio: 'hard worker',
      occupation: 'developer',
      expertise: 'web application',
    };

    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(user)
      .then((res) => {
        res.body.status.should.be.equal(201);
        done();
      })
      .catch((err) => done(err));
  });

  // eslint-disable-next-line no-undef
  it('App should check bad request to the field', (done) => {
    const user = {
      first_name: 'Eric',
      last_name: 'Vand',
      email: 'akandmi45543vw@gmail.com',
      password: '12345',
      address: 'Kigali',
      bio: 'hard worker',
      occupation: 'developer',
      expertise: 'web application',
    };

    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(user)
      .then((res) => {
        res.body.status.should.be.equal(400);
        done();
      })
      .catch((err) => done(err));
  });

  // eslint-disable-next-line no-undef
  it('App should check if email exists', (done) => {
    const user = {
      first_name: 'Umutesi',
      last_name: 'Jane',
      email: 'umutesi@gmail.com',
      password: 'Ab1234567@',
      address: 'Kigali',
      bio: 'hard worker',
      occupation: 'developer',
      expertise: 'web application',
    };

    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(user)
      .then((res) => {
        res.body.status.should.be.equal(409);
        done();
      })
      .catch((err) => done(err));
  });

// eslint-disable-next-line eol-last
});