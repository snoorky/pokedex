import { useState } from "react"

export default function PokemonAudio({ src }: { src: string }) {
    const [isPlaying, setIsPlaying] = useState(false)
    const audio = new Audio(src)

    const toggleAudio = () => {
        if (isPlaying) {
            audio.pause()
        } else { audio.play() }

        setIsPlaying(!isPlaying);
    }

    return (
        <button className="flex items-center justify-center rounded-full bg-[#ffffff54] p-2" onClick={toggleAudio}>
            {isPlaying ? <Pause /> : <Play />}
        </button>
    );
}

function Play() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="h-5"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="6 3 20 12 6 21 6 3" />
        </svg>
    );
}

function Pause() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="h-5"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="14" y="4" width="4" height="16" rx="1" /><rect x="6" y="4" width="4" height="16" rx="1" />
        </svg>
    );
}
