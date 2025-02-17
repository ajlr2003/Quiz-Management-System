import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QuizList from '../components/QuizList';

const Dashboard: React.FC = () => {
    const [quizzes, setQuizzes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchQuizzes = async () => {
            try {
                const response = await axios.get('/quizzes');
                setQuizzes(response.data);
            } catch (error) {
                console.error('Error fetching quizzes:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchQuizzes();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Your Quizzes</h1>
            <QuizList quizzes={quizzes} />
        </div>
    );
};

export default Dashboard;