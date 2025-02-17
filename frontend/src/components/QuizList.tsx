import React from 'react';

interface Quiz {
    id: number;
    title: string;
    description: string;
}

interface QuizListProps {
    quizzes: Quiz[];
}

const QuizList: React.FC<QuizListProps> = ({ quizzes }) => {
    return (
        <div>
            {quizzes.map((quiz) => (
                <div key={quiz.id}>
                    <h3>{quiz.title}</h3>
                    <p>{quiz.description}</p>
                </div>
            ))}
        </div>
    );
};

export default QuizList;