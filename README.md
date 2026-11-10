# Student Management API

A REST API for managing student records using Node.js, Express.js, MongoDB and Mongoose.

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman

## Features

- Create student
- Get all students
- Get student by ID
- Update student
- Delete student

## Installation

Clone the repository:

git clone YOUR_GITHUB_REPOSITORY_URL

Install dependencies:

npm install

Create a `.env` file:

PORT=8080
MONGO_URI=your_mongodb_connection_string

Run the server:

npx nodemon server.js

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/v1/students | Get all students |
| POST | /api/v1/students | Create student |
| GET | /api/v1/students/:id | Get student |
| PUT | /api/v1/students/:id | Update student |
| DELETE | /api/v1/students/:id | Delete student |