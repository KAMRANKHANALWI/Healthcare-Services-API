const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connectDB = require("./src/config/database");
const serviceRoute = require("./src/routes/serviceRoutes");

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/services", serviceRoute);

// Root Endpoint/route
app.get("/", (req, res) => res.json("Welcome to Healthcare Services API"));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
