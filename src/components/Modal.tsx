import PokemonAudio from "./PokemonAudio"
import { PokemonModalProps } from "../types"
import { Stats, StatsBase, StatsElements } from "./Stats"

export default function PokemonModal({ toggleModal, pokemon }: PokemonModalProps) {
    return (
        <div className="fixed inset-0 filter backdrop-blur-sm bg-[#00000063] min-w-screen min-h-screen flex items-center justify-center">
            <div className="relative flex flex-col items-center rounded-4xl w-full md:w-lg mx-8" style={{ background: `radial-gradient(80% 80% at 50% bottom, rgb(255, 102, 51), rgba(6, 14, 32, 0.8))` }}>
                <div className="absolute inset-0 bg-no-repeat rounded-4xl" style={{ backgroundImage: "url(./balls.svg)" }}></div>
                <button className="absolute z-1 cursor-pointer top-5 right-5" onClick={toggleModal}>
                    <img className="h-6" src="./close.svg" alt="Close modal" />
                </button>
                <div className="relative -mt-16">
                    <img className="filter saturate-100 h-64" src={pokemon.image} alt={pokemon.name} />
                </div>
                <div className="relative flex flex-col text-white space-y-2 px-8 w-full items-center">
                    <h4 className="capitalize font-bold text-2xl md:text-3xl" translate="no">{pokemon.name}</h4>
                    <div className="absolute right-8">
                        <PokemonAudio src={pokemon.audio} />
                    </div>
                    <hr className="w-full" />
                    <div className="flex justify-evenly w-full">
                        <StatsBase value={pokemon.height} type="M" title="Altura" />
                        <div className="bg-white w-[0.08rem] h-full"></div>
                        <div className="flex items-center gap-2">
                            {pokemon.types.map((type: any, index: number) => (
                                <StatsElements key={index} styled="h-8 lg:h-10 p-1.5 rounded-full" element={type} />
                            ))}
                        </div>
                        <div className="bg-white w-[0.08rem] h-full"></div>
                        <StatsBase value={pokemon.weight / 10} type="KG" title="Peso" />
                    </div>
                    <hr className="w-full" />
                    <div className="w-full my-4 space-y-2">
                        {pokemon.stats.map((status: any, index: number) => (
                            <Stats key={index} image={status.name} value={status.value} />
                        ))}
                    </div>
                    <div className="flex items-center w-full space-x-2 mb-8">
                        <p className="font-bold">Fraquezas:</p>
                        <div className="flex space-x-2 overflow-scroll">
                            {pokemon.weakness.map((type: any, index: number) => (
                                <StatsElements key={index} styled="h-6 lg:h-8 p-1.5 rounded-full" element={type} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}