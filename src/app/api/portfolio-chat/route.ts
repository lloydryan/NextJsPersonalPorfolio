import { NextResponse } from "next/server";
import {
  ownerProfile,
  portfolioKnowledge,
  portfolioScope,
  type KnowledgeEntry,
} from "@/data/portfolioKnowledge";

const OUT_OF_SCOPE_REPLY =
  "That is not part of Lloyd Ryan Largo's portfolio. I can answer about his experience, teaching subjects, projects, skills, certifications, personal details, and contact links.";

const STOP_WORDS = new Set([
  "a",
  "an",
  "and",
  "are",
  "can",
  "do",
  "does",
  "for",
  "he",
  "his",
  "how",
  "is",
  "me",
  "of",
  "on",
  "or",
  "tell",
  "the",
  "to",
  "what",
  "when",
  "where",
  "who",
  "with",
  "you",
]);

const IDENTITY_TOKENS = new Set(["lloyd", "ryan", "largo", "portfolio"]);

const normalize = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s+#.]/g, " ")
    .split(/\s+/)
    .filter((token) => token.length > 1 && !STOP_WORDS.has(token));

const getScore = (questionTokens: string[], entry: KnowledgeEntry) => {
  const searchableTokens = new Set(
    normalize(`${entry.title} ${entry.category} ${entry.keywords.join(" ")}`)
  );
  const contentTokens = new Set(normalize(entry.content));

  return questionTokens.reduce((score, token) => {
    if (IDENTITY_TOKENS.has(token)) return score;
    if (searchableTokens.has(token)) return score + 3;
    if (contentTokens.has(token)) return score + 1;
    return score;
  }, 0);
};

const buildAnswer = (question: string, matches: KnowledgeEntry[]) => {
  const lowerQuestion = question.toLowerCase();

  if (
    matches[0]?.id === "profile" &&
    (lowerQuestion.includes("who") || lowerQuestion.includes("about"))
  ) {
    return `${ownerProfile.summary} He is based in ${ownerProfile.location}.`;
  }

  if (matches[0]?.id === "personal") {
    if (lowerQuestion.includes("color") || lowerQuestion.includes("colour")) {
      return "Lloyd's favorite color is blue.";
    }

    if (
      lowerQuestion.includes("single") ||
      lowerQuestion.includes("girlfriend") ||
      lowerQuestion.includes("relationship")
    ) {
      return "No, Lloyd is not single; he has a girlfriend.";
    }
  }

  const context = matches[0]?.content ?? "";

  if (!context) {
    return "I can answer about Lloyd's experience, teaching subjects, projects, skills, certifications, personal details, and contact links.";
  }

  return context.length > 520 ? `${context.slice(0, 517).trim()}...` : context;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { message?: unknown };
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!message) {
      return NextResponse.json(
        { answer: "Ask me something about Lloyd Ryan Largo's portfolio." },
        { status: 400 }
      );
    }

    const questionTokens = normalize(message);
    const scoredEntries = portfolioKnowledge
      .map((entry) => ({ entry, score: getScore(questionTokens, entry) }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score);

    const isClearlyAboutLloyd = questionTokens.some((token) =>
      IDENTITY_TOKENS.has(token)
    );
    const hasStrongMatch = scoredEntries[0]?.score >= 1;

    if (!isClearlyAboutLloyd && !hasStrongMatch) {
      return NextResponse.json({
        answer: OUT_OF_SCOPE_REPLY,
        scope: portfolioScope,
      });
    }

    return NextResponse.json({
      answer: buildAnswer(
        message,
        scoredEntries.map((item) => item.entry)
      ),
      sources: scoredEntries.slice(0, 2).map((item) => item.entry.title),
    });
  } catch {
    return NextResponse.json(
      {
        answer:
          "I could not read that question. Please ask again about Lloyd's portfolio.",
      },
      { status: 400 }
    );
  }
}
