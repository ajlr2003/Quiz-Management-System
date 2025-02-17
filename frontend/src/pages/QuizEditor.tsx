import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import QuizForm from '../components/QuizForm';

const QuizEditor: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [quiz, setQuiz] = useState<{ title: string; description: string } | null>(null);
    // Remove the unused variables
    // const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (id) {
            // Fetch the quiz data from the API and set it to the state
            // Example:
            // axios.get(`/quizzes/${id}`).then(response => {
            //     setQuiz(response.data);
            //     setIsEditing(true);
            // });
        }
    }, [id]);

    const handleSubmit = (quizData: { title: string; description: string }) => {
        if (id) {
            // Update the quiz
            // Example:
            // axios.put(`/quizzes/${id}`, quizData).then(response => {
            //     // Handle successful update
            // });
        } else {
            // Create a new quiz
            // Example:
            // axios.post('/quizzes', quizData).then(response => {
            //     // Handle successful creation
            // });
        }
    };

    return (
        <div>
            <h1>{id ? 'Edit Quiz' : 'Create Quiz'}</h1>
            <QuizForm initialData={quiz || { title: '', description: '' }} onSubmit={handleSubmit} />
        </div>
    );
};

export default QuizEditor;