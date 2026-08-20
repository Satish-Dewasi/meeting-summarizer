import { access } from "node:fs/promises";
import processMeeting from "../src/meeting.service.js";

const testMeeting = async () => {
  try {
    const audioPath = "uploads/meeting-test-2.mp3";

    await access(audioPath);

    const result = await processMeeting(audioPath);

    console.log(JSON.stringify(result, null, 2));
  } catch (error) {
    console.error("Meeting processing failed:", error.message);
  }
};

testMeeting();
