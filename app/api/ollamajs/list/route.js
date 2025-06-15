// SWAMI KARUPPASWAMI THUNNAI

import ollama from "ollama";

export async function GET(req) {
  let models = await ollama.list();
  return Response.json({
    models: models.models,
  });
}
