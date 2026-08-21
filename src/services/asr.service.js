import dotenv from "dotenv";
import { AssemblyAI } from "assemblyai";

dotenv.config();

if (!process.env.ASSEMBLYAI_API_KEY) {
  throw new Error("ASSEMBLYAI_API_KEY is not configured.");
}

const client = new AssemblyAI({
  apiKey: process.env.ASSEMBLYAI_API_KEY,
});

const transcribeAudio = async (audioUrl) => {
  try {
    const transcript = await client.transcripts.transcribe({
      audio: audioUrl,
      speaker_labels: true,
    });

    if (transcript.status !== "completed") {
      throw new Error(`Transcription failed with status: ${transcript.status}`);
    }

    return {
      id: transcript.id,
      status: transcript.status,
      utterances: transcript.utterances.map((utterance) => ({
        speaker: utterance.speaker,
        start: utterance.start,
        end: utterance.end,
        text: utterance.text,
        confidence: utterance.confidence,
      })),
    };
  } catch (error) {
    throw new Error(`AssemblyAI transcription failed: ${error.message}`);
  }
};

export default transcribeAudio;
