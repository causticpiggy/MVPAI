// ---------------------------------------------
// CHANGE 1: Import the Groq provider
// ---------------------------------------------
import { groq } from "@ai-sdk/groq"; 
import { wrapLanguageModel, extractReasoningMiddleware } from "ai";

// ---------------------------------------------
// CHANGE 2: Use the Groq function and a Groq model name
// (mixtral-8x7b-32768 is a popular, fast Groq model)
// ---------------------------------------------
export const MODEL = groq('mixtral-8x7b-32768');

function getDateAndTime(): string {
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const timeStr = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        timeZoneName: 'short'
    });
    return `The day today is ${dateStr} and the time right now is ${timeStr}.`;
}

export const DATE_AND_TIME = getDateAndTime();

export const AI_NAME = "MyAI3";
export const OWNER_NAME = "Mihir Parekh";

// ... (Rest of the file remains the same)
