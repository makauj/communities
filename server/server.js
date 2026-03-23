const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const http = require('http');
const { Server } = require('socket.io');

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173", // Vite default
        methods: ["GET", "POST"]
    }
});

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
const defaultMongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/communities';

const connectDB = async (mongoUri = defaultMongoUri) => {
    try {
        if (mongoose.connection.readyState === 1) {
            return;
        }

        await mongoose.connect(mongoUri);
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        throw err;
    }
};

// Routes
const routes = require('./routes');
app.use('/api', routes);

// Socket.IO
io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

const PORT = process.env.PORT || 5000;

if (require.main === module) {
    connectDB()
        .then(() => {
            server.listen(PORT, () => {
                console.log(`Server running on port ${PORT}`);
            });
        })
        .catch(() => {
            process.exit(1);
        });
}

module.exports = { app, server, connectDB };
