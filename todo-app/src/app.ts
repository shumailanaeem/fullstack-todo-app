import express from 'express';
import dotenv from 'dotenv';
import todoRoutes from './routes/todoRoutes';

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use('/todos', todoRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
}); 