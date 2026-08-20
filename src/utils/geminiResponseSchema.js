export const responseSchema = {
  type: "object",
  properties: {
    summary: {
      type: "string",
    },
    action_items: {
      type: "array",
      items: {
        type: "object",
        properties: {
          task: {
            type: "string",
          },
          assignee: {
            type: ["string", "null"],
          },
          timestamp: {
            type: ["string", "null"],
          },
        },
        required: ["task", "assignee", "timestamp"],
      },
    },
  },
  required: ["summary", "action_items"],
};
