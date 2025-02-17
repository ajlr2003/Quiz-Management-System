import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import QuizEditor from './pages/QuizEditor';

const App: React.FC = () => {
  const handleLogin = async (username: string, password: string) => {
    // Implement your login logic here
  };
        <Route path="/" element={<Login onLogin={handleLogin} />} />
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/quiz-editor/:id?" element={<QuizEditor />} />
      </Routes>
    </Router>
  );
};

export default App;