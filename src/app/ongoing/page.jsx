"use client"

import Card from "@/components/Card"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Navbar from "@/components/Navbar"
import Pagination from "@/components/Pagination"
import getAnimeResponse from "@/libs/api-libs"
import { useEffect, useState } from "react"

const Page = () => {
    const [page, setPage] = useState(1)
    const [ongoing, setOngoingAnime] = useState([])

    const endPoint = "ongoing"
    const fetchData = async() => {
        const ongoingAnime = await getAnimeResponse(`${endPoint}`, `page=${page}`)
        
        setOngoingAnime(ongoingAnime)
    }

    useEffect(() => {
        fetchData()
    },[page])


    return(
        <>
            <Navbar/>
            <div className="px-4">
                <Header route={`Anime > ${endPoint} | Page ${page}`}/>
                <Card api={ongoing}/>
                <Pagination 
                page={page} 
                lastPage={ongoing.maxPage}
                setPage={setPage}
                />
            </div>
            <Footer/>
        </>
    )
}

export default Page