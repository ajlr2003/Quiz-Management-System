import express from 'express';
import bodyParser from 'body-parser';
import quizRoutes from './routes/quizRoutes';

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/quizzes', quizRoutes);

export default app;