import { Schema, model } from 'mongoose';

interface User {
    id: string;
    username: string;
    password: string;
}

const userSchema = new Schema<User>({
    id: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const UserModel = model<User>('User', userSchema);

export default UserModel;