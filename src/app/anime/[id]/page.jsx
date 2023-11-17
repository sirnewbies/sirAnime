import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Navbar from "@/components/Navbar"
import getAnimeResponse from "@/libs/api-libs"
import Link from "next/link"

const Page = async({ params : {id} }) => {
    const anime = await getAnimeResponse(`anime/${id}`)
    console.log(anime)

    const episodes = [];

    if (anime) {
        for (let i = 0; i < anime.currentTotalEpisodes; i++) {
            episodes.push(i + 1)
        }
    }

    return(
        <>
            <Navbar/>
            <div className="px-4">
                <Header route={`Anime > ${anime.title}`}/>
                <div className="bg-zinc-800 p-4 rounded-md">

                    <div className="py-8 min-h-[350px]">
                        <img 
                        src={anime.poster} 
                        alt={anime.slug} 
                        className="md:w-[200px] float-left mb-2 mr-7 w-screen rounded-2xl h-auto"/>

                        <p className="text-justify">{anime.description}</p>
                    </div>
                    
                    <div className="flex justify-center items-center">
                        <Header route="Details"/>
                    </div>

                    <div className="px-4 py-8">
                        {anime.detailsList.map((data, index) => (
                            <div
                            key={index}
                            className="grid grid-cols-2 border-t-[1px] border-zinc-700">
                                <div className="p-2">
                                    <p>{data.subTitle}</p>
                                </div>

                                <div className="p-3">
                                    {data.title}
                                </div>
                            </div>
                        ))}

                        <div className="grid grid-cols-2 border-t-[1px] border-zinc-700">
                            <div className="p-3">
                                <p>Genre</p>
                            </div>

                            <div className="p-3 flex gap-4 flex-wrap">
                                {anime.genres.map((data, index) => (
                                    <Link
                                    href={`/genre/${data.toLowerCase()}`}
                                    key={index}
                                    className="genre-list">
                                        {data}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex font-semibold justify-center items-center">
                        <Header route={`Nonton ${anime.title} sub Indo`}/>
                    </div>

                    <div className="px-4 py-8">
                        <ul className="max-h-80 overflow-auto">
                            {episodes && 
                            episodes.map((item) => (
                                <li 
                                key={item}
                                className="p-2 border-t-[1px] border-zinc-700"
                                >
                                    <Link
                                    href={`/anime/${anime.slugPlayer}/${item}`}
                                    className="hover:text-zinc-400 transition"
                                    >
                                        {anime.title}, episode {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Page