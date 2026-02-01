const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const sequelize = require('./config/db'); // Import central instance
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const { User } = require('./models/User'); // Ensure models are loaded
const { Activity } = require('./models/Activity');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection with SQLite (Sync)
const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('SQLite Connected successfully.');

        // Sync models (create tables)
        await sequelize.sync({ force: false });
        console.log('Database Synced.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

connectDB();

// Routes
const authRoutes = require('./routes/authRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);

app.get('/', (req, res) => {
    res.send('API is running...');
});

// Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
