import Trainer from "../assets/trainer.png"
import Cards from "../components/Cards"
import { PokedexProps } from "../types"

export default function Pokedex({ data, currentPage, setCurrentPage }: PokedexProps) {
    return (
        <div className="w-screen bg-black px-18 pt-10 pb-32 text-white">
            <div className="flex space-x-8 items-center">
                <img className="h-64" src={Trainer} alt="Trainer" loading="lazy" />
                <div>
                    <h2 className="text-3xl font-bold">Viva a emoção de capturar e batalhar!</h2>
                    <h3 className="text-3xl font-bold pb-8">Seja um mestre Pokémon!</h3>
                    <p>Descubra um mundo repleto de aventuras! Agora, você pode se tornar um verdadeiro treinador Pokémon, capturando suas criaturas favoritas com apenas
                        um clique. Espere a pokebola surgir, clique e encare um Pokémon surpresa para adicionar à sua pokédex. Monte um poderoso deck e desafie seus
                        amigos em empolgantes batalhas! A jornada começa agora. Prepare-se para ser o melhor treinador de todos os tempos!</p>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-x-6 gap-y-24 mt-40">
                {data.map((pokemon, index) => (
                    <Cards key={index} info={pokemon} />
                ))}
            </div>
            <div className="flex justify-center mt-10 space-x-4">
                <button onClick={() => setCurrentPage(Math.max(currentPage - 1, 0))} className="px-4 py-2 bg-gray-600 rounded-lg mr-4" disabled={currentPage === 0}>Anterior</button>
                <button onClick={() => setCurrentPage(currentPage + 1)} className="px-4 py-2 bg-gray-600 rounded-lg">Próximo</button>
            </div>
        </div>
    )
}