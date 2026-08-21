import express from "express";
import multer from "multer";
import processMeeting from "./meeting.service.js";
import { unlink } from "node:fs/promises";
import cors from "cors";
import "dotenv/config";
import {
  uploadAudio,
  generateSignedUrl,
  deleteAudio,
} from "./services/storage.service.js";

const app = express();

app.use(cors());

const PORT = process.env.PORT || 5000;

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const allowedAudioTypes = [
  "audio/mpeg",
  "audio/wav",
  "audio/x-wav",
  "audio/mp4",
  "audio/x-m4a",
  "audio/ogg",
  "audio/webm",
];

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (allowedAudioTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only audio files are allowed."));
    }
  },
});

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Meeting Summarizer API is running",
  });
});

app.post("/api/meetings", upload.single("audio"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      error: "Audio file is required.",
    });
  }

  let key;

  try {
    key = await uploadAudio(req.file);

    const audioUrl = await generateSignedUrl(key);

    const result = await processMeeting(audioUrl);

    return res.status(200).json(result);
  } catch (error) {
    console.error("Meeting processing failed:", error);

    return res.status(500).json({
      error: error.message,
    });
  } finally {
    await unlink(req.file.path).catch(() => {});

    if (key) {
      await deleteAudio(key).catch((error) => {
        console.error("Failed to delete R2 object:", error);
      });
    }
  }
});

app.use((error, req, res, next) => {
  return res.status(400).json({
    error: error.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
