const session = [
  // create request
  {
    mentorId: 3,
    questions: 'How about it',
  },
  // bad request
  {
    mentorId: 3,
    questions: '',
  },
  // session Id not exists
  {
    mentorId: 99,
    questions: 'How about it',
  },
];

export default session;
