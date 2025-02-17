# Quizo - Quiz Management System Frontend

## Overview
Quizo is a responsive web application that allows teachers to create, manage, and view quizzes. This frontend is built using React and utilizes ShadCN UI components for a modern interface.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd quizo/frontend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
To start the development server, run:
```
npm start
```
This will launch the application in your default web browser at `http://localhost:3000`.

### Folder Structure
- `src/`: Contains the source code for the application.
  - `components/`: Reusable components such as LoginForm, QuizForm, and QuizList.
  - `pages/`: Contains the main pages of the application including Dashboard, Login, and QuizEditor.
  - `App.tsx`: Main application component that sets up routing.
  - `index.tsx`: Entry point for the React application.

### API Endpoints
The frontend interacts with the backend API for authentication and quiz management. The following endpoints are used:
- `POST /login`: Authenticate user with static credentials.
- `POST /quizzes`: Create a new quiz.
- `GET /quizzes`: Retrieve all quizzes for the logged-in teacher.
- `GET /quizzes/{id}`: Retrieve details of a specific quiz.
- `PUT /quizzes/{id}`: Update an existing quiz.
- `DELETE /quizzes/{id}`: Delete a quiz.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.