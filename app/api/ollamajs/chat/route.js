// SWAMI KARUPPASWAMI THUNNAI

import ollama from "ollama";

export async function POST(req) {
  const body = await req.json();
  const { messages } = body;
  const { model } = body;
  const response = await ollama.chat({
    model: model,
    messages: messages,
  });
  return Response.json({
    response: response,
  });
}
