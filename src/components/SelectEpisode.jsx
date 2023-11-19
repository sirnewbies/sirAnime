const SelectEpisode = ( {slug, episodes} ) => {
    return(
        <select 
        id="select-episode"
        className="p-2 inline-block rounded-md bg-zinc-900 ring-2 ring-sky-800"
        >
            <option value="">Episode</option>
            {/* {episodes.map((item, index) => (
                <option value={`/anime/${slug}/${item}`} key={index}>
                    Episode {item}
                </option>
            ))} */}
        </select>
    )
}

export default SelectEpisode