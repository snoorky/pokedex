export default function Waves() {
  return (
    <div className="absolute w-[100dvw] h-24 -bottom-[25px] right-0 overflow-hidden">
      <div
        className="absolute bottom-0 right-0 w-[1000%] h-[100px] bg-repeat-x animate-[wave_15s_cubic-bezier(0.36,0.45,0.63,0.53)_infinite] translate-z-0"
        style={{ backgroundImage: "url(/wave.svg)", backgroundSize: "1600px auto", }}></div>
      <div
        className="absolute bottom-0 right-0 w-[1000%] h-[100px] bg-repeat-x animate-[wave_10s_cubic-bezier(0.36,0.45,0.63,0.53)_-0.125s_infinite] translate-z-0 opacity-100"
        style={{ backgroundImage: "url(/wave.svg)", backgroundSize: "1600px auto", }}></div>
      <div
        className="absolute bottom-0 right-0 w-[1000%] h-[100px] bg-repeat-x animate-[wave_5s_cubic-bezier(0.36,0.45,0.63,0.53)_-0.125s_infinite] translate-z-0 opacity-100"
        style={{ backgroundImage: "url(/wave.svg)", backgroundSize: "1600px auto", }}></div>
    </div>
  )
}
