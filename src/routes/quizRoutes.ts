import { Router } from 'express';
import {
  createQuiz,
  getQuizzes,
  getQuizById,
  updateQuiz,
  deleteQuiz,
} from '../controllers/quizController';

const router = Router();

// Route to create a new quiz
router.post('/quizzes', createQuiz);

// Route to get all quizzes
router.get('/quizzes', getQuizzes);

// Route to get a specific quiz by ID
router.get('/quizzes/:id', getQuizById);

// Route to update a quiz by ID
router.put('/quizzes/:id', updateQuiz);

// Route to delete a quiz by ID
router.delete('/quizzes/:id', deleteQuiz);

export default router;