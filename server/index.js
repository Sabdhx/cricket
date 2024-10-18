import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import playerRoutes from './routes/playerRoutes.js'
import authRoutes from './routes/authRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import hiring from "./routes/hiringRoutes.js"
dotenv.config();
connectDB();
import cors from "cors"
const app = express();

app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:5173', // Allow specific origin
  credentials: true,               // Enable credentials (cookies, authorization headers)
};

app.use(cors(corsOptions));


app.use('/api/auth', authRoutes);
app.use('/api/player', playerRoutes);
app.use('/api/hiring', hiring);
app.use('/api/admin', adminRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
