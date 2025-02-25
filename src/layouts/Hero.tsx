import PokemonModal from "../components/Modal"
import Waves from "../components/Waves"
import Loading from "./Loading"
import { useEffect, useState } from "react"
import { APIPokemon } from "../Api"
import { getTypeColor, PokemonData } from "../types"

export default function Hero() {
  const [pokemon, setPokemon] = useState<PokemonData | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    async function fetchRandomPokemon() {
      const randomId = Math.floor(Math.random() * 1010) + 1
      const response = await APIPokemon.get(`/pokemon/${randomId}`)
      const detailedData = response.data

      const { cries, height, id, name, sprites, stats, types, weight, species } = detailedData

      const fetchDescription = await APIPokemon.get(`${species.url}`)
      const flavorDescription = fetchDescription.data
      const description = flavorDescription.flavor_text_entries.find((entry: any) => entry.language.name === "pt")

      const statsData = stats.map((stat: any) => ({
        name: stat.stat.name, value: stat.base_stat,
      }))

      const typeNames = types.map((type: any) => type.type.name)
      const weaknesses = await fetchWeaknesses(typeNames)

      const pokemonData: PokemonData = {
        id, name, height, weight,
        image: sprites.other["official-artwork"].front_default,
        stats: statsData,
        types: typeNames,
        audio: cries.latest,
        description: description.flavor_text.replace(/\n|\f/g, " "),
        weakness: weaknesses,
      }

      setPokemon(pokemonData)
    }

    fetchRandomPokemon()
  }, []);

  const fetchWeaknesses = async (types: string[]): Promise<string[]> => {
    let allWeaknesses: string[] = []

    for (const type of types) {
      const response = await APIPokemon.get(`/type/${type}`)
      const data = response.data
      const weaknessesFromType = data.damage_relations.double_damage_from.map((weak: any) => weak.name)

      allWeaknesses = [...new Set([...allWeaknesses, ...weaknessesFromType])]
    }

    return allWeaknesses
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => {
      document.body.style.overflow = !prev ? "hidden" : "auto"
      return !prev
    })
  }

  if (!pokemon) return <Loading />

  return (
    <main className="relative bg-linear-to-b from-primary to-secondary min-w-screen flex flex-col items-center pt-10 px-9 md:px-12 lg:px-18 pb-16 md:pb-24 lg:pb-32">
      <div className="absolute inset-0 bg-no-repeat z-0" style={{ backgroundImage: "url(./balls.svg)" }}></div>
      <img src="./logo.svg" alt="Logotipo" />
      <div className="relative flex flex-col lg:flex-row mt-8 md:mt-16 items-center">
        <div className="text-white space-y-4 flex flex-col items-center lg:items-start">
          <h1 className="text-3xl md:text-5xl xl:text-7xl font-bold capitalize" translate="no">{pokemon.name}</h1>
          <div className="flex space-x-2">
            {pokemon.types.map((type: any, index: number) => (
              <span key={index} className="flex items-center rounded-xl font-semibold p-2" style={{ background: `${getTypeColor(type)}` }}>
                <img key={index} className="h-7" src={`./${type}.svg`} alt={type} loading="lazy" />
              </span>
            ))}
          </div>
          <p className="md:text-xl text-center lg:text-start font-semibold">{pokemon.description}</p>
          <button className="bg-[rgba(0,0,0,0.8)] rounded-xl cursor-pointer py-2 px-4" onClick={toggleModal}>Mais detalhes</button>
        </div>
        <img className="md:w-xl" src={pokemon.image} alt={pokemon.name} loading="lazy" />
      </div>
      <Waves />
      {isModalOpen && <PokemonModal toggleModal={toggleModal} pokemon={pokemon} />}
    </main>
  )
}
