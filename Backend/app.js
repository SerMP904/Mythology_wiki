require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRouter = require("./src/routers/userRouter")
const mythRouter = require("./src/routers/mythRouter")
const authRouter = require("./src/routers/authRouter")

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

app.use("/api/users", userRouter);
app.use("/api/myths", mythRouter);
app.use("/api/auth", authRouter);

app.listen(PORT, () => {
    
})