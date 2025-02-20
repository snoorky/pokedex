import Trainer from "../assets/trainer.png"
import Cards from "../components/Cards"
import { PokedexProps } from "../types"

export default function Pokedex({ data, currentPage, setCurrentPage }: PokedexProps) {
    return (
        <div className="min-w-screen bg-black text-white pt-10 px-9 md:px-12 lg:px-18 pb-16 md:pb-24 lg:pb-32">
            <div className="flex flex-col lg:flex-row items-center text-center lg:text-start space-y-8 lg:space-x-8">
                <img className="lg:h-72" src={Trainer} alt="Trainer" loading="lazy" />
                <div>
                    <h2 className="text-3xl font-bold">Viva a emoção de capturar e batalhar!</h2>
                    <h3 className="text-xl pb-4 lg:pb-8 font-bold">Seja um mestre Pokémon!</h3>
                    <p className="md:text-lg">Descubra um mundo repleto de aventuras! Agora, você pode se tornar um verdadeiro treinador Pokémon, capturando suas criaturas favoritas com apenas
                        um clique. Espere a pokebola surgir, clique e encare um Pokémon surpresa para adicionar à sua pokédex. Monte um poderoso deck e desafie seus
                        amigos em empolgantes batalhas! A jornada começa agora. Prepare-se para ser o melhor treinador de todos os tempos!</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 mt-20 lg:mt-40 gap-y-24">
                {data.map((pokemon, index) => (
                    <Cards key={index} info={pokemon} />
                ))}
            </div>
            <div className="flex justify-center mt-10 space-x-4">
                <button onClick={() => setCurrentPage(Math.max(currentPage - 1, 0))} className="px-4 py-2 bg-gray-600 rounded-lg mr-4" disabled={currentPage === 0}>Anterior</button>
                <button onClick={() => setCurrentPage(currentPage + 1)} className="px-4 py-2 bg-gray-600 rounded-lg mr-4">Próximo</button>
            </div>
        </div>
    )
}