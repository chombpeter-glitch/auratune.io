import { createClient } from "@/lib/supabase/server"
import { generateObject } from "ai"
import { z } from "zod"
import { NextResponse } from "next/server"

const playlistSchema = z.object({
  name: z.string().describe("A creative name for the playlist based on the emotion"),
  description: z.string().describe("A brief description of the playlist mood"),
  emotion_analysis: z.string().describe("A detailed analysis of the user's emotional state"),
  music_preferences: z.object({
    genres: z.array(z.string()).describe("Recommended music genres"),
    energy_level: z.enum(["low", "medium", "high"]).describe("Energy level of the music"),
    mood_keywords: z.array(z.string()).describe("Keywords describing the desired mood"),
    tempo: z.enum(["slow", "moderate", "fast"]).describe("Tempo preference"),
  }),
  track_recommendations: z
    .array(
      z.object({
        query: z.string().describe("Search query to find this type of track on Spotify"),
        reason: z.string().describe("Why this track fits the emotion"),
      }),
    )
    .length(15)
    .describe("15 specific track search queries"),
})

const languageInstructions = {
  es: {
    lang: "Spanish",
    instruction: "Respond in Spanish. Use creative Spanish names and descriptions.",
  },
  en: {
    lang: "English",
    instruction: "Respond in English. Use creative English names and descriptions.",
  },
  zh: {
    lang: "Chinese",
    instruction: "Respond in Chinese (Simplified). Use creative Chinese names and descriptions.",
  },
}

export async function POST(request: Request) {
  try {
    const supabase = await createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { data: subscription } = await supabase.from("subscriptions").select("*").eq("user_id", user.id).single()

    if (!subscription) {
      return NextResponse.json({ error: "Subscription not found" }, { status: 404 })
    }

    if (subscription.subscription_type !== "premium" && subscription.credits <= 0) {
      return NextResponse.json({ error: "No credits remaining. Please upgrade to premium." }, { status: 403 })
    }

    const { emotion, playlistName, language = "es" } = await request.json()

    if (!emotion || typeof emotion !== "string") {
      return NextResponse.json({ error: "Emotion description is required" }, { status: 400 })
    }

    const langConfig = languageInstructions[language as keyof typeof languageInstructions] || languageInstructions.es

    const { object: analysis } = await generateObject({
      model: "openai/gpt-4o-mini",
      schema: playlistSchema,
      prompt: `You are a music curator and emotional intelligence expert. ${langConfig.instruction}

User's emotional state: "${emotion}"

${playlistName ? `User wants to name the playlist: "${playlistName}"` : ""}

Tasks:
1. Deeply analyze the user's emotional state and what they're feeling
2. Determine the best music genres, energy level, tempo, and mood keywords
3. Generate 15 specific track search queries that would perfectly match this emotion
4. Each search query should be specific enough to find real songs (include artist names, song titles, or specific descriptors)
5. ${playlistName ? `Use "${playlistName}" as the playlist name` : `Create a creative, catchy playlist name in ${langConfig.lang}`}
6. Write a compelling playlist description in ${langConfig.lang}
7. Write the emotion analysis in ${langConfig.lang}

Be creative, empathetic, and specific. Think about what music would truly resonate with someone feeling this way.`,
    })

    if (subscription.subscription_type !== "premium") {
      await supabase
        .from("subscriptions")
        .update({ credits: subscription.credits - 1 })
        .eq("user_id", user.id)
    }

    await supabase.from("playlist_generations").insert({
      user_id: user.id,
      emotion_input: emotion,
      playlist_name: playlistName || analysis.name,
      tracks_count: 15,
      language: language,
    })

    return NextResponse.json(analysis)
  } catch (error) {
    console.error("[v0] Error generating playlist:", error)
    return NextResponse.json({ error: "Failed to generate playlist" }, { status: 500 })
  }
}
