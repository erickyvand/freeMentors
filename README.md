[![Build Status](https://travis-ci.org/erickyvand/freeMentors.svg?branch=develop)](https://travis-ci.org/erickyvand/freeMentors)
[![Coverage Status](https://coveralls.io/repos/github/erickyvand/freeMentors/badge.svg?branch=develop)](https://coveralls.io/github/erickyvand/freeMentors?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/00420ac0f5e2b0d24fac/maintainability)](https://codeclimate.com/github/erickyvand/freeMentors/maintainability)

# FREE MENTORS WEB APPLICATION

### Table of content
- Description
- project Setup
- Technology used
- Routes
- Relative links

Description
---

Free mentors is web application where Mentees can request mentorship sessions to Mentors,
Users can signup and singin to web application
Admin can change user to mentor,
Users can view mentors and view a specific mentor,
Mentors can accept or reject mentorship request from mentees,
Mentees can review Mentors after mentorship,
Admin can delete review

Project setup
---
1. Clone the project with `git clone https://github.com/erickyvand/freeMentors.git`
2. Change directory with `cd freeMentors` in terminal
3. Install packages with npm run `npm install <package-names>`
4. run the applicaion with npm start	

TECHNOLOGY USED
---

The APIs ENDPOINTS was developed using: `NodeJS`

ROUTES
---

|------------------------------------|---------|----------------------|
| Endpoint                           | Methods | Functionality        |
|------------------------------------|---------|----------------------|
| /api/v1/auth/signup                | POST    | User signup          |
| /api/v1/auth/signup                | POST    | User signin   	      |
| /api/v1/mentors                    | GET     | View all mentors     |
| /api/v1/mentors/:mentorId          | GET     | View specific mentor |
| /api/v1/user/:userId               | PATCH   | Change user to mentor|
| /api/v1/sessions                   | POST    | Request Session      |
| /api/v1/sessions/:sessionId/accept | PATCH   | Accept request       |
| /api/v1/sessions/:sessionId/reject | PATCH   | Reject request       | 
| /api/v1/sessions	                 | GET     | View session request |
| /api/v1/sessions/:sessionId/review | POST    | Review mentor        |
| /api/v1/sessions/:sessionId/review | DELETE  | Delete Review        |	
| /api/v1/users                      | GET     | View all users       |
|------------------------------------|---------|----------------------|

Relative links
---
1. Heroku: [https://the-free-mentors.herokuapp.com/](https://the-free-mentors.herokuapp.com/)
2. gh-pages: [https://erickyvand.github.io/freeMentors/UI/](https://erickyvand.github.io/freeMentors/UI/)
