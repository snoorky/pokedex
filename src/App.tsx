import Hero from "./layouts/Hero"
import Pokedex from "./layouts/Pokedex"
import { useEffect, useState } from "react"
import { APIPokemon } from "./Api"
import { PokemonType } from "./types"
import Footer from "./layouts/Footer"

export default function App() {
  const [pokemons, setPokemons] = useState<PokemonType[]>([])
  const [currentPage, setCurrentPage] = useState(0)
  const [limit, setLimit] = useState(9)

  const updateLimit = () => {
    if (window.innerWidth >= 1024) { setLimit(9) }
    else if (window.innerWidth >= 768) { setLimit(6) }
    else { setLimit(3) }
  }

  useEffect(() => {
    updateLimit()
    window.addEventListener("resize", updateLimit)
    return () => window.removeEventListener("resize", updateLimit)
  }, [])

  useEffect(() => {
    async function fetchPokemons() {
      const response = await APIPokemon.get(`/pokemon/?offset=${currentPage * limit}&limit=${limit}`)
      const basicData = response.data.results

      const detailedData: PokemonType[] = await Promise.all(
        basicData.map(async (pokemon: any) => {
          const details = await APIPokemon.get(`/pokemon/${pokemon.name}`)
          const { id, name, height, weight, sprites, types } = details.data

          return {
            id, name, height, weight,
            image: sprites.other["official-artwork"].front_default,
            types: types.map((type: any) => type.type.name)
          }
        })
      )

      setPokemons(detailedData)
    }

    fetchPokemons()
  }, [currentPage, limit])

  return (
    <>
      <Hero />
      <Pokedex data={pokemons} setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <Footer />
    </>
  )
}
