import { useState } from "react"

export default function TokenPicker({ totalTokens }) {
    const tokens = Array.from({ length: totalTokens }, (_, i) => i + 1)
    const [selectedToken, setSelectedToken] = useState(null);

    return (
        <div className="flex flex-col">
            <h4 className="text-2xl">Choose a token</h4>
            <div className="grid grid-cols-6 gap-2 py-4">
                {tokens.map((token) => {
                    return (
                        <button key={token} className={token === selectedToken ? "bg-green-800 text-white hover:cursor-pointer p-4 rounded-xl" : "bg-slate-50 border-2 border-green-200 p-4 rounded-xl hover:cursor-pointer hover:bg-green-100 text-green-900"}
                            onClick={() => setSelectedToken(token)}>{token}</button>
                    )
                })}
            </div>
            <button disabled={selectedToken === null} className="bg-green-800 text-white py-2 rounded-xl font-medium transition-all delay-50 duration-75 ease-in hover:cursor-pointer hover:bg-green-900 disabled:bg-gray-100 disabled:text-slate-600 disabled:border-2 disabled:border-green-200 disabled:cursor-not-allowed">
                Book Token {selectedToken}</button>
        </div>
    )
}