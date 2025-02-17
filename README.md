# Quiz Management System

## Project Overview
Quizo is a simple Quiz Management System where teachers can create, manage, and view quizzes.
Built with React (ShadCN UI) & TypeScript backend, and MySQL/PostgreSQL for storage.
## Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- PostgreSQL database

Features
- User Authentication (Static Credentials)
- CRUD Operations (Create, View, Edit, Delete Quizzes)
- REST API (Backend with TypeScript & Express)
- Responsive UI (ShadCN + TailwindCSS)
- SQL Database (PostgreSQL)
### Running the Application
1. Start the server:
   ```
   npm run start
   ```

2. The server will run on `http://localhost:3000` by default.

## API Documentation

#Frontend
- React.js
- ShadCN UI
- Tailwind CSS
- Axios
- React Router
#Backend
- Node.js (TypeScript)
- Express.js
- Sequelize (ORM)
- MySQL/PostgreSQL

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
