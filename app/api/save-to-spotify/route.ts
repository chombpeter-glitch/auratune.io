import { auth } from "@/lib/auth"
import { NextResponse } from "next/server"
import { createSpotifyPlaylist } from "@/lib/spotify"

export async function POST(request: Request) {
  try {
    const session = await auth()
    if (!session?.accessToken) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { name, description, tracks } = await request.json()

    if (!name || !Array.isArray(tracks)) {
      return NextResponse.json({ error: "Invalid playlist data" }, { status: 400 })
    }

    // Extract track URIs
    const trackUris = tracks.map((track: any) => track.uri).filter(Boolean)

    if (trackUris.length === 0) {
      return NextResponse.json({ error: "No valid tracks to add" }, { status: 400 })
    }

    // Create playlist on Spotify
    const result = await createSpotifyPlaylist(name, description, trackUris, session.accessToken)

    if (!result) {
      return NextResponse.json({ error: "Failed to create playlist on Spotify" }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      playlistId: result.id,
      spotifyUrl: result.url,
    })
  } catch (error) {
    console.error("[v0] Error saving to Spotify:", error)
    return NextResponse.json({ error: "Failed to save playlist" }, { status: 500 })
  }
}
