/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import chai from 'chai';
import chaihttp from 'chai-http';
import app from '../../app';

// eslint-disable-next-line no-unused-vars
const should = chai.should();

chai.use(chaihttp);

describe('/PATCH Mentor reject mentorship session from user', () => {
  const adminToken = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdF9uYW1lIjoiRXJpY2t5IiwibGFzdF9uYW1lIjoiVmFuZCIsImVtYWlsIjoiZXJpY2t5QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJDdSS1RwbXlIT3BUVzdHdDJ4cS5VdXVWUEZIazBMd0Y1ZW9hR0hudnVWbm9Jdjg1dDVrR05tIiwiYWRkcmVzcyI6Ikh1eWUiLCJiaW8iOiJiZWVuIGEgaGFyZCB3b3JrZXIiLCJvY2N1cGF0aW9uIjoiZGV2ZWxvcGVyIiwiZXhwZXJ0aXNlIjoiR2FtZXMgYXBwbGljYXRpb24iLCJ1c2VyX3R5cGUiOiJhZG1pbiJ9LCJpYXQiOjE1NjY4MzY5OTh9.Dg6sOkulBwnS7Sxi-nRljT47vBY0vTxBAVzX0MGghtY';

  const fakeAdminToken = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdF9uYW1lIjoiRXJpY2t5IiwibGFzdF9uYW1lIjoiVmFuZCIsImVtYWlsIjoiZXJpY2t5QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJDdSS1RwbXlIT3BUVzdHdDJ4cS5VdXVWUEZIazBMd0Y1ZW9hR0hudnVWbm9Jdjg1dDVrR05tIiwiYWRkcmVzcyI6Ikh1eWUiLCJiaW8iOiJiZWVuIGEgaGFyZCB3b3JrZXIiLCJvY2N1cGF0aW9uIjoiZGV2ZWxvcGVyIiwiZXhwZXJ0aXNlIjoiR2FtZXMgYXBwbGljYXRpb24iLCJ1c2VyX3R5cGUiOiJhZG1pbiJ9LCJpYXQiOjE1NjY4MzY5OTh9.Dg6sOkulBwnS7Sxi-nRljT47vBY0vTxBAVzX0MGght';

  const userToken = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyLCJmaXJzdF9uYW1lIjoiSGFraXphIiwibGFzdF9uYW1lIjoiT2xpdmllciIsImVtYWlsIjoiaGFraXphQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJC5mYkhPakdFeUlRWnE3a2xUZUVpbmVBSmZXQjFTWEY2bFRwTlgydFdFdFA3cEMvbXhjNk5TIiwiYWRkcmVzcyI6IktpZ2FsaSIsImJpbyI6Ik1hZCBkZXZlbG9wZXIiLCJvY2N1cGF0aW9uIjoiV2ViIiwiZXhwZXJ0aXNlIjoiV2ViIEFwcGxpY2F0aW9uIiwidXNlcl90eXBlIjoidXNlciJ9LCJpYXQiOjE1NjY4MzcxNDN9.3qG18jSxeUKE3EzrY1bGykCys82XJB4KVydLZoBqJo0';

  // eslint-disable-next-line no-unused-vars
  const fakeUserToken = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyLCJmaXJzdF9uYW1lIjoiSGFraXphIiwibGFzdF9uYW1lIjoiT2xpdmllciIsImVtYWlsIjoiaGFraXphQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJC5mYkhPakdFeUlRWnE3a2xUZUVpbmVBSmZXQjFTWEY2bFRwTlgydFdFdFA3cEMvbXhjNk5TIiwiYWRkcmVzcyI6IktpZ2FsaSIsImJpbyI6Ik1hZCBkZXZlbG9wZXIiLCJvY2N1cGF0aW9uIjoiV2ViIiwiZXhwZXJ0aXNlIjoiV2ViIEFwcGxpY2F0aW9uIiwidXNlcl90eXBlIjoidXNlciJ9LCJpYXQiOjE1NjY4MzcxNDN9.3qG18jSxeUKE3EzrY1bGykCys82XJB4KVydLZoBqJo';

  const mentorToken = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozLCJmaXJzdF9uYW1lIjoiSmFkbyIsImxhc3RfbmFtZSI6IkR1cyIsImVtYWlsIjoiamFkb0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRVSEJ1UkZsVTQ3elBadkdGWEtVYVR1RnE0aS9xcWJFWmR5cVlEQkpZTFdMdGdYS0dBTGxNYSIsImFkZHJlc3MiOiJLaWdhbGkiLCJiaW8iOiJNYWQgZGV2ZWxvcGVyIiwib2NjdXBhdGlvbiI6IldlYiIsImV4cGVydGlzZSI6IldlYiBBcHBsaWNhdGlvbiIsInVzZXJfdHlwZSI6Im1lbnRvciJ9LCJpYXQiOjE1NjY4Mzc2ODR9.GK6mKj--Jzroo3TkLZYxEZXjllIA439hr8VMXcEgK6g';

  const fakeMentorToken = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozLCJmaXJzdF9uYW1lIjoiSmFkbyIsImxhc3RfbmFtZSI6IkR1cyIsImVtYWlsIjoiamFkb0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRVSEJ1UkZsVTQ3elBadkdGWEtVYVR1RnE0aS9xcWJFWmR5cVlEQkpZTFdMdGdYS0dBTGxNYSIsImFkZHJlc3MiOiJLaWdhbGkiLCJiaW8iOiJNYWQgZGV2ZWxvcGVyIiwib2NjdXBhdGlvbiI6IldlYiIsImV4cGVydGlzZSI6IldlYiBBcHBsaWNhdGlvbiIsInVzZXJfdHlwZSI6Im1lbnRvciJ9LCJpYXQiOjE1NjY4Mzc2ODR9.GK6mKj--Jzroo3TkLZYxEZXjllIA439hr8VMXcEgK6';

  it('App should check if a user token is valid', (done) => {
    chai.request(app)
      .patch('/api/v1/sessions/1/reject')
      .set('Authorization', fakeMentorToken)
      .then((res) => {
        res.body.status.should.be.equal(403);
        done();
      })
      .catch((err) => done(err));
  });

  it('App should check if a logged user is a mentor', (done) => {
    chai.request(app)
      .patch('/api/v1/sessions/1/reject')
      .set('Authorization', userToken)
      .then((res) => {
        res.body.status.should.be.equal(403);
        done();
      })
      .catch((err) => done(err));
  });

  it('App should check if the given session ID exists', (done) => {
    chai.request(app)
      .patch('/api/v1/sessions/99/reject')
      .set('Authorization', mentorToken)
      .then((res) => {
        res.body.status.should.be.equal(404);
        done();
      })
      .catch((err) => done(err));
  });

  it('App should check if the logged mentor ID matches the requested mentor ID', (done) => {
    const session = {
      sessionId: 1,
      id: 3,
      sessionName: 'NodeJS',
      questions: 'Please I wanted to request for this session',
      status: 'pending',
    };
    chai.request(app)
      .patch('/api/v1/sessions/1/reject')
      .set('Authorization', mentorToken)
      .send(session)
      .then((res) => {
        res.body.status.should.be.equal(403);
        done();
      })
      .catch((err) => done(err));
  });

  it('App should check if the requested session was accepted before', (done) => {
    const session = {
      sessionId: 4,
      mentorId: 3,
      sessionName: 'C++',
      questions: 'Please I wanted to request for this session',
      status: 'accepted',
    };
    chai.request(app)
      .patch('/api/v1/sessions/4/reject')
      .set('Authorization', mentorToken)
      .send(session)
      .then((res) => {
        res.body.status.should.be.equal(401);
        done();
      })
      .catch((err) => done(err));
  });

  it('App should check if the requested session was rejected before', (done) => {
    const session = {
      sessionId: 5,
      mentorId: 3,
      sessionName: 'Ruby on Rails',
      questions: 'Please I wanted to request for this session',
      status: 'rejected',
    };
    chai.request(app)
      .patch('/api/v1/sessions/5/reject')
      .set('Authorization', mentorToken)
      .send(session)
      .then((res) => {
        res.body.status.should.be.equal(409);
        done();
      })
      .catch((err) => done(err));
  });

  it('App should update the requested to rejected', (done) => {
    const session = {
      sessionId: 2,
      mentorId: 3,
      sessionName: 'Laravel PHP',
      questions: 'Please I wanted to request for this session',
      status: 'rejected',
    };
    chai.request(app)
      .patch('/api/v1/sessions/2/reject')
      .set('Authorization', mentorToken)
      .send(session)
      .then((res) => {
        res.body.status.should.be.equal(200);
        done();
      })
      .catch((err) => done(err));
  });

  it('App should check if mentor has set headers token', (done) => {
    chai.request(app)
      .patch('/api/v1/sessions/3/reject')
      .then((res) => {
        res.body.status.should.be.equal(403);
        done();
      })
      .catch((err) => done(err));
  });
});
