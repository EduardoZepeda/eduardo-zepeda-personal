import { useEffect } from "react"
import { useRouter } from "next/router"

function EduardoZepeda() {
    // Simple plain page that redirects to main page from author links
    const router = useRouter()

    useEffect(() => {
        router.replace("/")
        return

    }, [])

    return <></>
}

export default EduardoZepeda