export interface PokemonType {
  id: number
  name: string
  height: number
  weight: number
  image: string
  types: string[]
}

export interface PokedexProps {
  data: any[]
  currentPage: number
  setCurrentPage: (page: number) => void
}

export interface PokemonData {
  id: number
  name: string
  height: number
  weight: number
  image: string
  stats: { name: string, url: string }[]
  types: string[]
  audio: string
  description: string
  weakness: string[]
}

export interface StatsElements {
  element: string
  styled: string
}

export interface StatsBase {
  value: number
  title: string
  type: string
}

export interface Stats {
  image: string
  value: number
}

export interface PokemonModalProps {
  toggleModal: () => void
  pokemon: any
}

export const pokemonTypes = [
  { type: "bug", color: "#99CC33" },
  { type: "dark", color: "#333333" },
  { type: "dragon", color: "#7038F8" },
  { type: "electric", color: "#FFCC33" },
  { type: "fairy", color: "#FF99CC" },
  { type: "fighting", color: "#FF3333" },
  { type: "fire", color: "#FF6633" },
  { type: "flying", color: "#6699FF" },
  { type: "ghost", color: "#6666CC" },
  { type: "grass", color: "#66CC33" },
  { type: "ground", color: "#FFCC66" },
  { type: "ice", color: "#99FFFF" },
  { type: "normal", color: "#FFCC99" },
  { type: "poison", color: "#AA66CC" },
  { type: "psychic", color: "#FF6699" },
  { type: "rock", color: "#CC9966" },
  { type: "steel", color: "#CCCCCC" },
  { type: "water", color: "#3399FF" },
]

export const getTypeColor = (type: string) => {
  const found = pokemonTypes.find((t) => t.type === type)
  return found ? found.color : "#FFFFFF"
}