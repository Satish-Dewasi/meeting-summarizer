import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { responseSchema } from "../utils/geminiResponseSchema.js";

dotenv.config();

const ai = new GoogleGenAI({});

const generateMeetingSummary = async (formattedTranscript) => {
  if (!formattedTranscript || !formattedTranscript.trim()) {
    throw new Error("Formatted transcript is empty.");
  }
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash-lite",
      contents: `
You are an AI assistant that analyzes speaker-labelled transcripts.

Generate an accurate, concise summary of the discussion and identify
explicit action items.

An action item must represent a specific task that a participant is
expected to perform.

Do not convert general advice, opinions, suggestions, discussion topics,
or promotional statements into action items.

Only identify an assignee when the transcript explicitly supports it.
Never infer or invent an assignee.

If there are no explicit action items, return an empty action_items list.

For each action item, include the timestamp where the task was discussed.
If no reliable timestamp can be associated with the task, use null.

Do not invent information that is not present in the transcript.

Transcript:
${formattedTranscript}
      `,
      config: {
        responseMimeType: "application/json",
        responseSchema,
      },
    });

    return JSON.parse(response.text);
  } catch (error) {
    throw new Error(`Gemini analysis failed: ${error.message}`);
  }
};

export default generateMeetingSummary;
