import React, { useState } from 'react';

interface QuizFormProps {
    initialData?: {
        title: string;
        description: string;
    };
    onSubmit: (quizData: { title: string; description: string }) => void;
}

const QuizForm: React.FC<QuizFormProps> = ({ initialData = { title: '', description: '' }, onSubmit }) => {
    const [title, setTitle] = useState(initialData.title);
    const [description, setDescription] = useState(initialData.description);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ title, description });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default QuizForm;