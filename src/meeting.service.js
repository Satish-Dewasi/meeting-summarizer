import transcribeAudio from "./services/asr.service.js";
import {
  formatSpeakerTranscript,
  formatTranscriptForGemini,
} from "./services/transcript.service.js";
import generateMeetingSummary from "./services/gemini.service.js";

const processMeeting = async (audioPath) => {
  try {
    const transcriptData = await transcribeAudio(audioPath);

    const transcript = formatSpeakerTranscript(transcriptData.utterances);

    const formattedTranscript = formatTranscriptForGemini(
      transcriptData.utterances,
    );

    const geminiResult = await generateMeetingSummary(formattedTranscript);

    return {
      transcript,
      summary: geminiResult.summary,
      action_items: geminiResult.action_items,
    };
  } catch (error) {
    throw new Error(`Meeting processing failed: ${error.message}`);
  }
};

export default processMeeting;
