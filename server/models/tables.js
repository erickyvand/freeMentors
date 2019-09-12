/* eslint-disable no-console */
import client from '../config/config';

const tableUsers = `
  DROP TABLE IF EXISTS users CASCADE;
  CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name character varying(250) NOT NULL,
    last_name character varying(250) NOT NULL,
    email character varying(250) NOT NULL,
    password character varying(250) NOT NULL,
    address character varying(250) NOT NULL,
    bio text NOT NULL,
    occupation character varying(250) NOT NULL,
    expertise character varying(250) NOT NULL,
    user_type character varying(10) NOT NULL DEFAULT 0,
    signedUp_at DATE DEFAULT NOW()
  );
`;

const tableRequestSession = `
  DROP TABLE IF EXISTS request_session CASCADE;
  CREATE TABLE request_session (
    id SERIAL PRIMARY KEY,
    mentorid integer NOT NULL,
    menteeid integer NOT NULL,
    questions character varying(250) NOT NULL,
    status character varying(30) NOT NULL DEFAULT 'pending'
  );  
`;

const tableReviews = `
  DROP TABLE IF EXISTS reviews CASCADE;
  CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    reqsession_id integer NOT NULL,
    menteeid integer NOT NULL,
    score integer NOT NULL,
    remark character varying(250) NOT NULL
  );  
`;

const tableQueries = `
  ${tableUsers} 
  ${tableRequestSession} 
  ${tableReviews}
`;

(async () => {
  try {
    await client.query(tableQueries);
  } catch (err) {
    console.log(err);
  }
})();
