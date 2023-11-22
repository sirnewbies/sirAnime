const StreamingMain = ( {data, videoLink }) => {

    return(
        <>
            <div className="px-4">
                <div className="grid grid-cols-1 justify-items-center rounded-md place-items-center">
                    <h3 className="absolute text-2xl">Sabar bang...</h3>
                    <iframe 
                    src={videoLink} 
                    allowFullScreen
                    className="aspect-video w-full rounded-md relative"
                    >
                    </iframe>
                </div>
            </div>
        </>
    )
}

export default StreamingMain