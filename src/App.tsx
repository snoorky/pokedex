import Hero from "./layouts/Hero"
import Pokedex from "./layouts/Pokedex"
import { useEffect, useState } from "react"
import { APIPokemon } from "./Api"
import { PokemonType } from "./types"
import Footer from "./layouts/Footer"

export default function App() {
  const [pokemons, setPokemons] = useState<PokemonType[]>([])
  const [currentPage, setCurrentPage] = useState(0)
  const limit = 9

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
  }, [currentPage])

  return (
    <>
      <Hero />
      <Pokedex data={pokemons} setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <Footer />
    </>
  )
}
