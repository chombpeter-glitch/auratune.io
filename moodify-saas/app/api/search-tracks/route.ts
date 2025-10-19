import { auth } from "@/lib/auth"
import { NextResponse } from "next/server"
import { searchSpotifyTrack } from "@/lib/spotify"

export async function POST(request: Request) {
  try {
    const session = await auth()
    if (!session?.accessToken) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { queries } = await request.json()

    if (!Array.isArray(queries)) {
      return NextResponse.json({ error: "Queries must be an array" }, { status: 400 })
    }

    // Search for tracks in parallel
    const trackPromises = queries.map((query: string) => searchSpotifyTrack(query, session.accessToken!))

    const tracks = await Promise.all(trackPromises)

    // Filter out null results
    const validTracks = tracks.filter((track) => track !== null)

    return NextResponse.json({ tracks: validTracks })
  } catch (error) {
    console.error("[v0] Error searching tracks:", error)
    return NextResponse.json({ error: "Failed to search tracks" }, { status: 500 })
  }
}
