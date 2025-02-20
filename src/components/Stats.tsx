import { getTypeColor } from "../types"
import type { Stats, StatsBase, StatsElements } from "../types"

export function Stats({ image, value }: Stats) {
    return (
        <div className="flex items-center w-full space-x-2">
            <img className="h-6" src={`./${image}.svg`} alt={image} />
            <p className="text-end font-bold w-8">{value}</p>
            <progress className="border-[#060b14cc] overflow-hidden appearance-none w-full border-2 rounded-xl" value={value} max="200" />
        </div>
    )
}

export function StatsBase({ value, title, type }: StatsBase) {
    return (
        <div className="flex flex-col items-center">
            <p className="font-bold">{value} {type}</p>
            {/* <p className="text-2xl">{value} {type}</p> */}
            <span className="flex space-x-1 md:space-x-2">
                <img className="h-6" src={type == "M" ? "./meters.svg" : "./weight.svg"} alt={type == "M" ? "meters" : "weight"} />
                <p>{title}</p>
            </span>
        </div>
    )
}

export function StatsElements({ element, styled }: StatsElements) {
    return (
        <img className={styled} src={`./${element}.svg`} alt={element} style={{ backgroundColor: getTypeColor(element) }} />
    )
}