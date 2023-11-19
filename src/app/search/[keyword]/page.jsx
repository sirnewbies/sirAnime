"use client"

import Card from "@/components/Card"
import Header from "@/components/Header"
import Navbar from "@/components/Navbar"
import getAnimeResponse from "@/libs/api-libs"

const Page = async({params}) => {
    const {keyword} = params
    const decodedKeyword = decodeURI(keyword)

    const searchAnime = await getAnimeResponse("search", `query=${keyword}`)
    return(
        <>
        <Navbar/>
        <div className="px-4">
            <Header route={`Cari > ${decodedKeyword}`}/>
            <Card api={searchAnime}/>
        </div>
        </>
    )
}

export default Page