import express from "express";
import cors from "cors";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

app.post("/api/insight", async (req, res) => {
    try {
        const { mood, habits, goals, tasks, journals } = req.body;

        const response = await ai.models.generateContent({
    model: "gemini-3.5-flash-lite",
    contents: `Give one short practical suggestion based on the user's overall information.
Consider all habits, goals, and tasks, not only the latest item.

Mood: ${mood}
Habits: ${habits}
Goals: ${goals}
Tasks: ${tasks}
Journals:${journals}

Keep the suggestion under 100 words.`
});

        res.json({
    insight: response.text
});

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Something went wrong"
        });
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});