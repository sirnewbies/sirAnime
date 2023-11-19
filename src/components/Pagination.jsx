const Pagination = ({ page, lastPage, setPage}) => {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handleNextPage = () => {
        setPage((prevState => prevState + 1))
        scrollTop()
    }

    const handlePrevPage = () => {
        setPage((prevState => prevState - 1))
        scrollTop()
    }

    return(
        <div className="flex justify-center items-center py-4 px-2 gap-4">

        {page <= 1 ? null :
            <button 
            onClick={handlePrevPage}
            className="hover:text-zinc-400 transition-all"
            >
                Prev
            </button>
        }
            <p>{page} dari {lastPage}</p>

        {page >= lastPage ? null :
            <button 
            onClick={handleNextPage}
            className="hover:text-zinc-400 transition-all"
            >
                Next
            </button>
        }
        </div>
    )
}

export default Pagination