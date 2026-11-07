const express = require("express");

const app = express();

app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
    res.json({
        message: "Task Management API is running"
    });
});


app.get("/health", (req, res) => {
    res.status(200).json({
        status: "OK",
        message: "Server is healthy"
    });
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});