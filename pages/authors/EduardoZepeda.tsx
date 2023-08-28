import { useEffect } from 'react'
import { useRouter } from 'next/router'

function EduardoZepeda (): JSX.Element {
  // Simple plain page that redirects to main page from author links
  const router = useRouter()

  useEffect(() => {
    const redirectToHome = async (): Promise<void> => {
      await router.replace('/')
    }
    void redirectToHome()
  }, [])

  return <></>
}

export default EduardoZepeda
