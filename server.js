// server.js
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const userRoutes = require('./routes/user');
require('dotenv').config();

// Connect to the database
connectDB();

const app = express();

// Middleware
app.use("/api/users",userRoutes);

// Routes
app.get("/",(req,res)=>{
    res.send("API is running");
})

// Define the port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
