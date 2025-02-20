import { getTypeColor } from "../types"
import { StatsBase, StatsElements } from "./Stats"

export default function Cards({ info }: any) {
    return (
        <div className="relative border border-gray-700 rounded-4xl" style={{ background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), ${getTypeColor(info.types[0])})` }}>
            <div className="absolute inset-0 bg-no-repeat z-0" style={{ backgroundImage: "url(/balls.svg" }}></div>
            <div className="flex justify-center -mt-20">
                <img className="w-64 filter saturate-200" loading="lazy" src={info.image} alt={info.name} />
            </div>
            <div className="relative z-1 flex flex-col items-center mb-10 space-y-4">
                <h3 className="text-2xl font-bold capitalize">{info.name}</h3>
                <div className="flex justify-center w-full gap-4">
                    {info.types.map((type: any, index: number) => (
                        <span key={index} className="flex items-center gap-2 filter saturate-200 rounded-xl py-1 px-3 font-semibold uppercase" style={{ background: `${getTypeColor(info.types[index])}` }}>
                            <StatsElements key={index} styled="h-4" element={type} /> {type}
                        </span>
                    ))}
                </div>
                <div className="flex justify-center gap-4 w-72">
                    <div className="flex flex-col items-center w-full">
                        <StatsBase value={info.height} type="M" title="Altura" />
                    </div>
                    <div className="flex flex-col items-center w-full">
                        <StatsBase value={info.weight / 10} type="KG" title="Peso" />
                    </div>
                </div>
            </div>
        </div>
    )
}