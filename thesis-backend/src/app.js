const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// Security & Logging Middlewares
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check cho Docker
app.get('/status', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Thesis API is running' });
});

// Route mẫu
app.get('/', (req, res) => {
  res.send('Welcome to Thesis Ecosystem - Powered by Node.js & Strapi');
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

module.exports = app;