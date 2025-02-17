import { Request, Response } from 'express';
import Quiz from '../models/quizModel';

// Create a new quiz
export const createQuiz = async (req: Request, res: Response) => {
    const { title, description, teacher_id } = req.body;
    try {
        const newQuiz = await Quiz.create({ title, description, teacher_id });
        res.status(201).json({ message: 'Quiz created successfully', quiz: newQuiz });
    } catch (error) {
        res.status(500).json({ message: 'Error creating quiz', error });
    }
};

// Get all quizzes for a teacher
export const getQuizzes = async (req: Request, res: Response) => {
    const teacherId = req.body.teacher_id; // Assuming teacher_id is sent in the request body
    try {
        const quizzes = await Quiz.findAll({ where: { teacher_id: teacherId } });
        res.status(200).json(quizzes);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving quizzes', error });
    }
};

// Get a specific quiz by ID
export const getQuizById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const quiz = await Quiz.findByPk(id);
        if (quiz) {
            res.status(200).json(quiz);
        } else {
            res.status(404).json({ message: 'Quiz not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving quiz', error });
    }
};

// Update a quiz
export const updateQuiz = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, description } = req.body;
    try {
        const [updated] = await Quiz.update({ title, description }, { where: { id } });
        if (updated) {
            const updatedQuiz = await Quiz.findByPk(id);
            res.status(200).json({ message: 'Quiz updated successfully', quiz: updatedQuiz });
        } else {
            res.status(404).json({ message: 'Quiz not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating quiz', error });
    }
};

// Delete a quiz
export const deleteQuiz = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deleted = await Quiz.destroy({ where: { id } });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Quiz not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting quiz', error });
    }
};