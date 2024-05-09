import { NextResponse, NextRequest } from "next/server";
import openai from "@/lib/openai.js";

//const openai = new OpenAI({ apiKey: process.env.OPEN_API_KEY || "" });

export const POST = async (req: NextRequest, res: NextResponse) => {
  console.log(openai.apiKey);
  const { ingredients, cookingTime, calories, meal } = await req.json();
  try {
    let prompt: string = "";
    if (calories !== "" && calories !== null && calories !== undefined) {
      prompt = `Suggest 1 recipe with around ${calories} calories per serving for ${meal}.Include recipe title as Title, how much calories per serving, meal type, ingredients list and instructions in the text. The response should be 5 paragraphs. Don't include decorative text like "Here's a recipe for you" or "Another recipe you'd enjoy...".`;
    } else {
      prompt = `I have these ingredients: ${ingredients.join(
        ", "
      )}. Suggest 1 recipe I can cook in around ${cookingTime} minutes. Include recipe title as Title, ingredients list and instructions in the same choice. Don't include decorative text like "Here's a recipe for you" or "Another recipe you'd enjoy...".`;
    }
    console.log(prompt);
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ content: prompt, role: "user" }],
      temperature: 1,
      //max_tokens: 50,
    });

    let recipes: string[] | undefined = [];
    if (response)
      if (response.choices.length > 0) {
        recipes = response.choices[0].message.content
          ?.split("\n")
          .filter((line: string | any[]) => line.length > 0);
      }
    return NextResponse.json({
      recipes,
    });
  } catch (e) {
    return NextResponse.json({ Error: e });
  }
};
