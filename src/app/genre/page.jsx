import Header from "@/components/Header"
import Navbar from "@/components/Navbar"
import getAnimeResponse from "@/libs/api-libs"
import Link from "next/link"

const Page = async() => {

    const genre = await getAnimeResponse("genre")
    
    return(
        <>
        <Navbar/>
        <div className="px-4">
            <Header route={`Genre`}/>
            <div className="grid gap-4 grid-cols-6 mxl:grid-cols-4 mlg:grid-cols-3 msm:grid-cols-2 mxsm:grid-cols-1">
                {genre.list?.map((item, index) => (
                    <Link
                    className="w-full bg-zinc-700 p-4 rounded-md hover:ring-2 hover:ring-emerald-500 transition"
                    key={index}
                    href={`/genre/${item.slug}`}>
                        {item.title}
                    </Link>
                ))}
            </div>
        </div>
        </>
    )
}

export default Page