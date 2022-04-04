import { createContext, Dispatch, SetStateAction } from 'react'

interface openSidebarContextProps {
  hideSidebar: boolean
  setHideSidebar: Dispatch<SetStateAction<boolean>>
  socialMediaLinks: socialMediaProps
}

interface socialMediaProps {
  github: string
  instagram: string
  linkedin: string
  twitter: string
  email: string
}

export const openSidebarContext = createContext<openSidebarContextProps>(
  {
    hideSidebar: true,
    setHideSidebar: () => { },
    socialMediaLinks: {
      github: '',
      instagram: '',
      linkedin: '',
      twitter: '',
      email: ''
    }
  })
