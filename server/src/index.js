import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRoutes from './routes/auth.route.js';
import protectedRoute from './routes/protected.route.js';
import { connectDB } from './lib/db.js';
const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials: true}));

app.use('/auth', authRoutes);
app.use('/protected', protectedRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})