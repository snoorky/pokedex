import { getTypeColor } from "../types"
import type { Stats, StatsBase, StatsElements } from "../types"

export function Stats({ image, value }: Stats) {
    return (
        <div className="w-full flex items-center space-x-2">
            <img className="h-6" src={`/${image}.svg`} alt={image} />
            <p className="w-8 text-end font-bold">{value}</p>
            <progress className="w-full border-2 rounded-xl border-[#060b14cc] overflow-hidden appearance-none" value={value} max="200" />
        </div>
    )
}

export function StatsBase({ value, title, type }: StatsBase) {
    return (
        <div className="flex flex-col items-center">
            <p className="text-2xl font-bold">{value} {type}</p>
            <span className="flex space-x-2">
                <img className="h-6" src={type == "M" ? "/meters.svg" : "/weight.svg"} alt={type == "M" ? "meters" : "weight"} />
                <p>{title}</p>
            </span>
        </div>
    )
}

export function StatsElements({ element, styled }: StatsElements) {
    return (
        <img className={styled} src={`/${element}.svg`} alt={element} style={{ backgroundColor: getTypeColor(element) }} />
    )
}