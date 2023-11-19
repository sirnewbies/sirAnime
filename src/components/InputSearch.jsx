"use client"

import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (e) => {
        const keyword = searchRef.current.value

        if (!keyword) return

        if (e.key == "Enter" || e.type == "click") {
            e.preventDefault()
            router.push(`/search/${keyword}`)
        }
    }
    return(
        <form className="relative flex items-center py-4">
            <input 
                type="text" 
                ref={searchRef}
                onKeyDown={handleSearch}
                placeholder="Cari anime..."
                className="px-3 py-2 rounded-md ring-1 ring-zinc-200  focus:ring-2 w-full"
            />

            <div 
            className="absolute right-0 mx-1 text-xl cursor-pointer"
            onClick={handleSearch}
            >
            🔍
            </div>
        </form>
    )
}

export default InputSearch