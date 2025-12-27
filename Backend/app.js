require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectToDatabase = require("./src/db/database")

const PORT = Number(process.env.PORT || 3000);
const app = express();

app.use(express.json());
connectToDatabase();

app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type"],
    })
);

app.listen(PORT, () => {
    res.status(200).json("Connected to database");
})