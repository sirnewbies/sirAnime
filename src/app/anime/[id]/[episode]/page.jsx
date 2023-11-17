
import Header from "@/components/Header"
import getAnimeResponse from "@/libs/api-libs"
// import { useParams } from "next/navigation"
// import { useState } from "react"

const { default: Navbar } = require("@/components/Navbar")

const Page = async({ params : {id, item} }) => {
    // const [anime, setAnime] = useState()
    // const {slug, episode} = useParams()

    const URL = await getAnimeResponse(`/anime/${id}/${item}`)
    console.log(URL)

    const episodes = []
    if (URL?.currentTotalEpisodes) {
        for (let i = 0; i < URL.currentTotalEpisodes; i++) {
            episodes.push(i + 1)
        }
    }
    return(
        <div>
            <Navbar/>
            <div>
                <Header route={`🎦 Anime > ${item}`}/>
            </div>
        </div>
    )
}

export default Page