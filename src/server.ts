// filepath: /Users/syedar/q/quizo/backend/src/server.ts
import express from 'express';

const app = express();
const PORT = process.env.PORT || 5002; // Change the port number here

app.use(express.json());

// Your routes here

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});