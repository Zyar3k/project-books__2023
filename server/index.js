import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const PORT = 8888;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});
