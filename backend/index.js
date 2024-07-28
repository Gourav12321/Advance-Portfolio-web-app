import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import adminRoutes from './Routes/Routes.js';
import cors from 'cors';
import path from 'path';

const app = express();
dotenv.config();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Database connected successfully"))
  .catch(error => console.error("Error connecting to database:", error));

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'mern-portfolio/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'mern-portfolio', 'dist', 'index.html'));
});

// Route middleware
app.use('/admin', adminRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
