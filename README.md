# Candidates Management System - Backend

Backend server for managing candidate information, user authentication, and protected routes.

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for Authentication

## Features

- User Registration (Signup)
- User Login with JWT Token
- Protected Routes for Candidates Management
- CRUD operations for Candidates
- CORS enabled for frontend communication

## Installation & Setup

1. Clone the repository

```bash
git clone https://github.com/Kalyanpandaga/candidate_manager_backend
cd candidate_manager_backend
```

2. Install dependencies

```bash
npm install
```

3. Create a .env file inside backend folder with:

```bash
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_secret_key
FRONTEND_URL=your_frontend_application_url
```

4. Start the server

```bash
npm run dev
```

Backend will run on: http://localhost:5000

# API Endpoints

## Auth

- **POST** `/auth/signup`

  - User signup

- **POST** `/auth/login`
  - User login (returns JWT token)

## Candidates (Protected by JWT)

- **GET** `/candidate/view`

  - View candidates (supports filters, search, pagination)

- **POST** `/candidate/add`
  - Add new candidate

## Authentication

All candidate-related endpoints are protected and require a JWT token.

Add the token in the Authorization header:

```
Authorization: Bearer <your_token>
```

## Project Structure

```
backend/
├── src/
│   ├── config/        # Database config
│   ├── controllers/   # Auth and Candidate controllers
│   ├── middleware/    # JWT auth middleware
│   ├── models/        # Mongoose models
│   ├── routes/        # Route handlers
│   ├── utils/         # Utility functions
│   └── app.js         # Main app file
├── package.json
└── .env
```

## Deployment

- Deployed on Render
- MongoDB Atlas for database
- Environment variables managed in Render settings
