export interface Episode {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
  url: string
  created: string
}
export interface Info {
  count: number
  next: string
  pages: number
  prev: string | null
}

export interface Response {
  info: Info
  results: Episode[]
}
