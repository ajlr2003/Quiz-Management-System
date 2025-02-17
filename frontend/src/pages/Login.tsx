import React from 'react';

interface LoginFormProps {
    onLogin: (username: string, password: string) => Promise<void>;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
    // component implementation
    return (
        <form>
            {/* form implementation */}
        </form>
    );
};

export default LoginForm;