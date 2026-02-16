import express from "express";
import cors from "cors";
import { readFileSync } from "fs";

const jokes = JSON.parse(readFileSync("./jokes.json", "utf-8"));

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get("/joke", (req, res) => {
  const randInt = Math.floor(Math.random() * jokes.length);

  res.json(jokes[randInt]);
});

app.listen(PORT, () => {
  console.log(`Express server running on port: http://localhost:${PORT}`);
});
