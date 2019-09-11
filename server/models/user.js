import bcrypt from 'bcrypt';
import client from '../config/config';

const saltRounds = 10;
const password = 'Ab12345@';

const hashPass = bcrypt.hashSync(password, saltRounds);

const user1 = `
  INSERT INTO users (first_name, last_name, email, password, address, bio, occupation, expertise, user_type) VALUES ('Ericky', 'Vand', 'ericky@gmail.com', '${hashPass}', 'Kigali', 'Love', 'Developer', 'web dev', '1');
`;

const user2 = `
  INSERT INTO users (first_name, last_name, email, password, address, bio, occupation, expertise) VALUES ('Hakiza', 'Olivier', 'hakiza@gmail.com', '${hashPass}', 'Kigali', 'Love', 'Developer', 'web dev');
`;

const user3 = `
  INSERT INTO users (first_name, last_name, email, password, address, bio, occupation, expertise, user_type) VALUES ('Jado', 'Dus', 'jado@gmail.com', '${hashPass}', 'Kigali', 'Love', 'Developer', 'web dev', '2');
`;

const user4 = `
  INSERT INTO users (first_name, last_name, email, password, address, bio, occupation, expertise) VALUES ('Umutesi', 'Jane', 'umutesi@gmail.com', '${hashPass}', 'Kigali', 'Love', 'Developer', 'web dev');
`;

const user5 = `
  INSERT INTO users (first_name, last_name, email, password, address, bio, occupation, expertise) VALUES ('Bruce', 'Rute', 'bruce@gmail.com', '${hashPass}', 'Kigali', 'Love', 'Developer', 'web dev');
`;

const usersQueries = `
  ${user1} 
  ${user2} 
  ${user3}
  ${user4}
  ${user5}
`;


(async () => {
  try {
    await client.query(usersQueries);
  } catch (err) {
    console.log(err);
  }
})();
