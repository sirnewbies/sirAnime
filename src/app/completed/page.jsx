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
    const [completed, setCompletedAnime] = useState([])

    const endPoint = "completed"
    const fetchData = async() => {
        const completedAnime = await getAnimeResponse(`${endPoint}`, `page=${page}`)
        setCompletedAnime(completedAnime)
    }

    useEffect(() => {
        fetchData()
    },[page])

    return(
        <>
        <Navbar/>
        <div className="px-4">
            <Header route={`Anime > Tamat | Page ${page}`}/>
            <Card api={completed}/>
            <Pagination
            page={page}
            setPage={setPage}
            lastPage={completed.maxPage}
            />
            <Footer/>
        </div>
        </>
    )
}

export default Page