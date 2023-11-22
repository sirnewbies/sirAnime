"use client"

import { useRouter } from "next/navigation"
import Header from "./Header"
import { withRouter } from "next/router"

const SelectEpisode = () => {

    const router = useRouter()
    const {slug, episodes} = router.query
    return(
        <Header route={`episode ${episodes}`}/>
    )
}

export default withRouter(SelectEpisode)