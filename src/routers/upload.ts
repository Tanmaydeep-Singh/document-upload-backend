import express, { Request, Response } from "express";
import multer from "multer";
import AWS from "aws-sdk";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, "../../uploads");
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

router.post(
  "/",
  upload.single("file"),
  async (req: Request, res: Response): Promise<void> => {
    try {
      if (!req.file) {
        res.status(400).json({ message: "No file uploaded" });
        return;
      }

      const filePath = path.join(__dirname, "../../uploads", req.file.filename);
      const fileContent = fs.readFileSync(filePath);

    //   const params: AWS.S3.PutObjectRequest = {
    //     Bucket: process.env.AWS_BUCKET_NAME!,
    //     Key: req.file.filename,
    //     Body: fileContent,
    //   };

    //   const uploadResult = await s3.upload(params).promise();

      fs.unlinkSync(filePath);

      res.status(200).json({
        message: "File uploaded successfully",
        // data: uploadResult,
      });
    } catch (error) {
      console.error("Error uploading file to S3:", error);
      res.status(500).json({ message: "Error uploading file", error });
    }
  }
);

export default router;
