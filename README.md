# Quizo Backend README

## Project Overview
Quizo is a Quiz Management System that allows teachers to create, manage, and view quizzes. This backend application is built using TypeScript and Express, providing a RESTful API for quiz management and user authentication.

## Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- MySQL or PostgreSQL database

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd quizo/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure your database:
   - Update the database connection settings in your environment or configuration file.

### Running the Application
1. Start the server:
   ```
   npm run start
   ```

2. The server will run on `http://localhost:3000` by default.

## API Documentation

### Authentication
- **POST /login**
  - Request Body: `{ "username": "demo", "password": "demo" }`
  - Response: `{ "message": "Login successful" }`

### Quiz Management
- **POST /quizzes**
  - Request Body: `{ "title": "Quiz Title", "description": "Quiz Description" }`
  - Response: `{ "message": "Quiz created successfully" }`

- **GET /quizzes**
  - Response: `[{ "id": 1, "title": "Quiz Title", "description": "Quiz Description", "teacher_id": 1 }]`

- **GET /quizzes/{id}**
  - Response: `{ "id": 1, "title": "Quiz Title", "description": "Quiz Description" }`

- **PUT /quizzes/{id}**
  - Request Body: `{ "title": "Updated Title", "description": "Updated Description" }`
  - Response: `{ "message": "Quiz updated successfully" }`

- **DELETE /quizzes/{id}**
  - Response: `{ "message": "Quiz deleted successfully" }`

## Folder Structure
- `src/`: Contains the source code for the backend application.
  - `controllers/`: Contains controller files for handling requests.
  - `models/`: Contains model files for database entities.
  - `routes/`: Contains route definitions for the API.
  - `services/`: Contains service files for business logic.
  - `app.ts`: Initializes the Express application.
  - `server.ts`: Starts the server.

## License
This project is licensed under the MIT License.