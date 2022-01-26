const express = require('express');
const app = express();
const connectDB = require('./config/db');
// const multer = require("multer");
const path = require('path');

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// define the image path
app.use('/images', express.static(path.join(__dirname, '/images')));

// Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/blog', require('./routes/blog'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/category', require('./routes/category'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend is running at ${PORT}`);
});
