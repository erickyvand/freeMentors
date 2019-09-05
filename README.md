[![Build Status](https://travis-ci.org/erickyvand/freeMentors.svg?branch=develop)](https://travis-ci.org/erickyvand/freeMentors)
[![Coverage Status](https://coveralls.io/repos/github/erickyvand/freeMentors/badge.svg?branch=develop)](https://coveralls.io/github/erickyvand/freeMentors?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/00420ac0f5e2b0d24fac/maintainability)](https://codeclimate.com/github/erickyvand/freeMentors/maintainability)

# FREE MENTORS WEB APPLICATION

Free mentors is web application where Mentees can request mentorship sessions to Mentors,
Users can signup and singin to web application
Admin can change user to mentor,
Users can view mentors and view a specific mentor,
Mentors can accept or reject mentorship request from mentees,
Mentees can review Mentors after mentorship,
Admin can delete review

## TECHNOLOGY USED

The APIs ENDPOINTS was developed using: `NodeJS`

## DESCRIPTION OF API ENDPOINT ROUTES

### SIGNUP Endpoint

/POST `/api/v1/auth/signup`: User should signup

### SIGNIN Endpoint

/POST `/api/v1/auth/signin`: User should signin

### VIEW MENTORS Endpoint

/GET `/api/v1/mentors`: user should view all mentors

### VIEW SPECIFIC MENTOR Endpoint

/GET `/api/v1/mentors/:mentorId`: User should view a specific mentor

### CHANGE USER TO MENTOR Endpoint

/PATCH `/api/v1/user/:userId`

### MENTORSHIP SESSION REQUEST Endpoint 

/POST `/api/v1/sessions`: User should create mentorship session request with a mentor 

### ACCEPT MENTORSHIP Endpoint

/PATCH `/api/v1/sessions/:sessionId/accept`: Mentor should accept request

### REJECT MENTORSHIP Endpoint

/PATCH `/api/v1/sessions/:sessionId/reject`: Mentor should reject request

### GET SESSIONS Endpoint

/GET `/api/v1/sessions`: Mentee should get sessions request he created and Mentors should get sessions request created against him

### REVIEW Endpoint

/POST `/api/v1/sessions/:sessionId/review`: Mentee should review Mentor after mentorship session

### DELETE REVIEW Endpoint

/DELETE `/api/v1/sessions/:sessionId/review`: Admin should delete review

### GET ALL USERS Endpoint

/GET `/api/v1/users`: Admin should view all users
