interface tracks {
  id: number
  name: string
  path: string
}
export interface ArtistInterface {
  id: number
  name: string
  albumName: string
  albumCover: string
  artistImage: string
  releaseYear: strign
  tracks: tracks[]
}
