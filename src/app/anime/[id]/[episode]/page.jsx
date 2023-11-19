
import Header from "@/components/Header"
import SelectEpisode from "@/components/SelectEpisode"
import SelectServer from "@/components/SelectServer"
import getAnimeResponse from "@/libs/api-libs"
// import { useParams } from "next/navigation"
// import { useState } from "react"

const { default: Navbar } = require("@/components/Navbar")

const Page = async({ params : {id, episodes} }) => {
    // const [anime, setAnime] = useState()
    // const {slug, episode} = useParams()

    const URL = await getAnimeResponse(`/anime/${id}/${episodes}`)
    console.log(URL)

    // let episodes = []
    if (URL?.currentTotalEpisodes) {
        for (let i = 0; i < URL.currentTotalEpisodes; i++) {
            episodes.push(i + 1)
        }
    }
    return(
        <div>
            <Navbar/>
            <div>
                <Header route={`🎦 Anime > ${id}`}/>
                <div>
                    <div className="py-4 flex justify-end gap-4">
                        <SelectServer 
                        data={id}

                        />

                        <SelectEpisode 
                        episodes={episodes}
                        slug={id}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page