import PokemonAudio from "./PokemonAudio"
import { PokemonModalProps } from "../types"
import { Stats, StatsBase, StatsElements } from "./Stats"

export default function PokemonModal({ toggleModal, pokemon }: PokemonModalProps) {
    return (
        <div className="fixed inset-0 filter backdrop-blur-sm bg-[#00000063] w-screen h-screen flex items-center justify-center">
            <div className="relative rounded-4xl w-lg h-[600px] flex flex-col items-center" style={{ background: `radial-gradient(80% 80% at 50% bottom, rgb(255, 102, 51), rgba(6, 14, 32, 0.8))` }}>
                <div className="absolute inset-0 bg-no-repeat rounded-4xl" style={{ backgroundImage: "url(./balls.svg)" }}></div>
                <button className="absolute z-1 top-5 right-5 cursor-pointer" onClick={toggleModal}>
                    <img className="h-6" src="./close.svg" alt="Close modal" />
                </button>
                <div className="relative -mt-16">
                    <img className="filter saturate-100 h-64" src={pokemon.image} alt={pokemon.name} />
                </div>
                <div className="relative space-y-2 px-16 w-full flex flex-col items-center text-white">
                    <h4 className="capitalize text-3xl font-bold">{pokemon.name}</h4>
                    <div className="absolute right-14">
                        <PokemonAudio src={pokemon.audio} />
                    </div>
                    <hr className="w-full" />
                    <div className="flex w-full justify-evenly">
                        <StatsBase value={pokemon.height} type="M" title="Altura" />
                        <div className="bg-white w-[0.08rem] h-full"></div>
                        <div className="flex items-center gap-4">
                            {pokemon.types.map((type: any, index: number) => (
                                <StatsElements key={index} styled="h-8 p-2 rounded-full" element={type} />
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
                    <div className="flex w-full items-center space-x-2 mb-8">
                        <p className="font-bold">Fraquezas:</p>
                        <div className="flex space-x-2">
                            {pokemon.weakness.map((type: any, index: number) => (
                                <StatsElements key={index} styled="h-8 p-2 rounded-full" element={type} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}