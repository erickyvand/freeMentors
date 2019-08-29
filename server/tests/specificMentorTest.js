/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import chai from 'chai';
import chaihttp from 'chai-http';
import app from '../../app';

// eslint-disable-next-line no-unused-vars
const should = chai.should();

chai.use(chaihttp);

// eslint-disable-next-line no-undef
describe('/GET View specific mentor', () => {
  const adminToken = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdF9uYW1lIjoiRXJpY2t5IiwibGFzdF9uYW1lIjoiVmFuZCIsImVtYWlsIjoiZXJpY2t5QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJDdSS1RwbXlIT3BUVzdHdDJ4cS5VdXVWUEZIazBMd0Y1ZW9hR0hudnVWbm9Jdjg1dDVrR05tIiwiYWRkcmVzcyI6Ikh1eWUiLCJiaW8iOiJiZWVuIGEgaGFyZCB3b3JrZXIiLCJvY2N1cGF0aW9uIjoiZGV2ZWxvcGVyIiwiZXhwZXJ0aXNlIjoiR2FtZXMgYXBwbGljYXRpb24iLCJ1c2VyX3R5cGUiOiJhZG1pbiJ9LCJpYXQiOjE1NjY4MzY5OTh9.Dg6sOkulBwnS7Sxi-nRljT47vBY0vTxBAVzX0MGghtY';

  const fakeAdminToken = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdF9uYW1lIjoiRXJpY2t5IiwibGFzdF9uYW1lIjoiVmFuZCIsImVtYWlsIjoiZXJpY2t5QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJDdSS1RwbXlIT3BUVzdHdDJ4cS5VdXVWUEZIazBMd0Y1ZW9hR0hudnVWbm9Jdjg1dDVrR05tIiwiYWRkcmVzcyI6Ikh1eWUiLCJiaW8iOiJiZWVuIGEgaGFyZCB3b3JrZXIiLCJvY2N1cGF0aW9uIjoiZGV2ZWxvcGVyIiwiZXhwZXJ0aXNlIjoiR2FtZXMgYXBwbGljYXRpb24iLCJ1c2VyX3R5cGUiOiJhZG1pbiJ9LCJpYXQiOjE1NjY4MzY5OTh9.Dg6sOkulBwnS7Sxi-nRljT47vBY0vTxBAVzX0MGght';

  const userToken = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyLCJmaXJzdF9uYW1lIjoiSGFraXphIiwibGFzdF9uYW1lIjoiT2xpdmllciIsImVtYWlsIjoiaGFraXphQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJC5mYkhPakdFeUlRWnE3a2xUZUVpbmVBSmZXQjFTWEY2bFRwTlgydFdFdFA3cEMvbXhjNk5TIiwiYWRkcmVzcyI6IktpZ2FsaSIsImJpbyI6Ik1hZCBkZXZlbG9wZXIiLCJvY2N1cGF0aW9uIjoiV2ViIiwiZXhwZXJ0aXNlIjoiV2ViIEFwcGxpY2F0aW9uIiwidXNlcl90eXBlIjoidXNlciJ9LCJpYXQiOjE1NjY4MzcxNDN9.3qG18jSxeUKE3EzrY1bGykCys82XJB4KVydLZoBqJo0';

  // eslint-disable-next-line no-unused-vars
  const fakeUserToken = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyLCJmaXJzdF9uYW1lIjoiSGFraXphIiwibGFzdF9uYW1lIjoiT2xpdmllciIsImVtYWlsIjoiaGFraXphQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJC5mYkhPakdFeUlRWnE3a2xUZUVpbmVBSmZXQjFTWEY2bFRwTlgydFdFdFA3cEMvbXhjNk5TIiwiYWRkcmVzcyI6IktpZ2FsaSIsImJpbyI6Ik1hZCBkZXZlbG9wZXIiLCJvY2N1cGF0aW9uIjoiV2ViIiwiZXhwZXJ0aXNlIjoiV2ViIEFwcGxpY2F0aW9uIiwidXNlcl90eXBlIjoidXNlciJ9LCJpYXQiOjE1NjY4MzcxNDN9.3qG18jSxeUKE3EzrY1bGykCys82XJB4KVydLZoBqJo';

  const mentorToken = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozLCJmaXJzdF9uYW1lIjoiSmFkbyIsImxhc3RfbmFtZSI6IkR1cyIsImVtYWlsIjoiamFkb0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRVSEJ1UkZsVTQ3elBadkdGWEtVYVR1RnE0aS9xcWJFWmR5cVlEQkpZTFdMdGdYS0dBTGxNYSIsImFkZHJlc3MiOiJLaWdhbGkiLCJiaW8iOiJNYWQgZGV2ZWxvcGVyIiwib2NjdXBhdGlvbiI6IldlYiIsImV4cGVydGlzZSI6IldlYiBBcHBsaWNhdGlvbiIsInVzZXJfdHlwZSI6Im1lbnRvciJ9LCJpYXQiOjE1NjY4Mzc2ODR9.GK6mKj--Jzroo3TkLZYxEZXjllIA439hr8VMXcEgK6g';

  const fakeMentorToken = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozLCJmaXJzdF9uYW1lIjoiSmFkbyIsImxhc3RfbmFtZSI6IkR1cyIsImVtYWlsIjoiamFkb0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRVSEJ1UkZsVTQ3elBadkdGWEtVYVR1RnE0aS9xcWJFWmR5cVlEQkpZTFdMdGdYS0dBTGxNYSIsImFkZHJlc3MiOiJLaWdhbGkiLCJiaW8iOiJNYWQgZGV2ZWxvcGVyIiwib2NjdXBhdGlvbiI6IldlYiIsImV4cGVydGlzZSI6IldlYiBBcHBsaWNhdGlvbiIsInVzZXJfdHlwZSI6Im1lbnRvciJ9LCJpYXQiOjE1NjY4Mzc2ODR9.GK6mKj--Jzroo3TkLZYxEZXjllIA439hr8VMXcEgK6';

  it('App should allow user to view a specific mentor', (done) => {
    chai.request(app)
      .get('/api/v1/mentors/3')
      .set('Authorization', userToken)
      .then((res) => {
        res.body.status.should.be.equal(200);
        done();
      })
      .catch((err) => done(err));
  });

  it('App should check the allowed user to access the route', (done) => {
    chai.request(app)
      .get('/api/v1/mentors/3')
      .set('Authorization', mentorToken)
      .then((res) => {
        res.body.status.should.be.equal(403);
        done();
      })
      .catch((err) => done(err));
  });

  it('App should check if the user token is correct', (done) => {
    chai.request(app)
      .get('/api/v1/mentors/3')
      .set('Authorization', fakeUserToken)
      .then((res) => {
        res.body.status.should.be.equal(403);
        done();
      })
      .catch((err) => done(err));
  });

  it('App should check if the user has set token', (done) => {
    chai.request(app)
      .get('/api/v1/mentors/3')
      .then((res) => {
        res.status.should.be.equal(403);
        done();
      })
      .catch((err) => done(err));
  });

  it('App should check if the given ID exists', (done) => {
    chai.request(app)
      .get('/api/v1/mentors/99')
      .set('Authorization', userToken)
      .then((res) => {
        res.body.status.should.be.equal(404);
        done();
      })
      .catch((err) => done(err));
  });

  it('App should check if user ID is a mentor ID', (done) => {
    chai.request(app)
      .get('/api/v1/mentors/1')
      .set('Authorization', userToken)
      .then((res) => {
        res.body.status.should.be.equal(400);
        done();
      })
      .catch((err) => done(err));
  });
});