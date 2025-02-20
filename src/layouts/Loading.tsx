export default function Loading() {
    return (
        <div className="bg-black min-w-screen min-h-screen flex justify-center items-center">
            <div className="relative w-24 h-24 rounded-full border-4 border-gray-700 overflow-hidden animate-spin">
                <div className="bg-red-500 w-full h-1/2"></div>
                <div className="bg-white w-full h-1/2"></div>
                <div className="absolute top-1/2 w-full h-1 bg-gray-700 -translate-y-1/2"></div>
                <div className="absolute w-8 h-8 border-4 border-black rounded-full bg-white top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"></div>
                <div className="absolute w-4 h-4 border-1 border-gray-700 rounded-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"></div>
            </div>
        </div>
    )
}