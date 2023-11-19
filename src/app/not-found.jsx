"use client"

import { FileSearch } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const Page = () => {
    const router = useRouter()

    const handleGoBack = () => {
        router.back()
    }

    return(
        <div className="flex justify-center items-center min-h-screen">
            <div className="flex justify-center items-center flex-col gap-2">
                <FileSearch size={55}/>
                <h2 className="font-bold text-sky-400 text-xl md:text-4xl">PAGE NOT FOUND</h2>

                <button onClick={handleGoBack} className="hover:text-sky-400 transition-all underline">Kembali</button>
            </div>
        </div>
    )
}

export default Page