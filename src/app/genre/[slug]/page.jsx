import Footer from "@/components/Footer"
import getAnimeResponse from "@/libs/api-libs"
import Link from "next/link"

const { default: Header } = require("@/components/Header")
const { default: Navbar } = require("@/components/Navbar")

const Page = async({params: {slug}}) => {

    const getGenre = await getAnimeResponse(`genre/${slug}`)
    return(
        <>
        <Navbar/>
        <div className="px-4">
            <Header route={`Genre ${slug}`}/>
            <div className="flex justify-center items-center min-h-min bg-zinc-700 rounded-xl gap-4 flex-col">
                <h1>
                    NANTI LAGI YA 😊
                </h1>
                <Link 
                href="/"
                className="underline text-sky-500">
                Kembali ke beranda
                </Link>
            </div>
            <Footer/>
        </div>
        </>
    )
}

export default Page