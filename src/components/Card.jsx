import Link from "next/link"

const Card = ({ api }) => {
    return(
        <div className="bg-zinc-800 p-4 rounded-md">
            <div className="grid gap-4 md:grid-cols-6 grid-cols-2 "> 
                {api.list?.map((anime, index) => (
                    <Link key={index} href={`/anime/${anime.slug}`} className="card group">
                        <img
                        src={anime.poster} 
                        alt={anime.title} 
                        title={anime.title}
                        className="card-image"
                        />

                        <div 
                        className="card-play-icon"
                        style={{top: "calc(50% - 32px)" }}
                        >
                            ▶
                        </div>

                        <div className="w-full absolute bottom-0 h-[20%] P-2 px-2 py-2 mssm:py-0 mxsm:py-2">
                            <h2>{anime.title}</h2>
                        </div>

                        <div className="card-star">
                            <p className="font-semibold text-[.9rem]">
                            ⭐ {anime.star}
                            </p>
                        </div>

                        <div className="card-type">
                            <p className="font-semibold text-[.9rem]">
                                {anime.episode}
                            </p>
                        </div>
                    </Link>
                ))
                }
            </div>
        {/* <Pagination data={page} route={resource} apii={api}/> */}
        </div>
    )
}

export default Card