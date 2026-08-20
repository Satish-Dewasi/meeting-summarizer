import express from "express";
import multer from "multer";
import processMeeting from "./meeting.service.js";
import { unlink } from "node:fs/promises";

const app = express();

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

  try {
    const result = await processMeeting(req.file.path);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  } finally {
    await unlink(req.file.path).catch(() => {});
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
