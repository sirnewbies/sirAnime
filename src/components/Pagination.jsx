import { useRouter } from "next/navigation"

const Pagination = ({ apii, data, route, lastPage, setPage}) => {

    const router = useRouter

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const nextPage = () => {
        router.push(`${apii}/${route}/?page=${data}` + 1)
        scrollTop()
    }

    const handleNextPage = () => {
        setPage((prevstate))
    }

    return(
        <div className="flex justify-center items-center py-4 px-2 gap-4">
            <button>Prev</button>
            <p>{data}</p>
            <button onClick={nextPage}>Next</button>
        </div>
    )
}

export default Pagination