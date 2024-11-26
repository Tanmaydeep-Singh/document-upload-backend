import express, { Request, Response } from "express";
import uploadRouter from "./routers/upload";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response): void => {
  res.status(200).send("Hello, the server is working fine!");
});

app.use("/api/upload", uploadRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
