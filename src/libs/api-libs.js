const getAnimeResponse = async(resourse, query) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resourse}/?${query}`)
    const dataRes = await res.json()
    return dataRes
}

export default getAnimeResponse