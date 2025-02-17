import { Request, Response } from 'express';

const staticCredentials = {
    username: 'teacher',
    password: 'password123'
};

export const authenticateUser = (req: Request, res: Response) => {
    const { username, password } = req.body;

    if (username === staticCredentials.username && password === staticCredentials.password) {
        return res.status(200).json({ message: 'Login successful' });
    } else {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
};