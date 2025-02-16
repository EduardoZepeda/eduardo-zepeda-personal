import { createContext, Dispatch, SetStateAction } from 'react'

interface openSidebarContextProps {
  hideSidebar: boolean
  setHideSidebar: Dispatch<SetStateAction<boolean>>
  socialMediaLinks: socialMediaProps
  authorFirstName: string
  authorLastName: string
}

interface socialMediaProps {
  github: string
  instagram: string
  linkedin: string
  twitter: string
  base64Email: string
}

export const openSidebarContext = createContext<openSidebarContextProps>(
  {
    hideSidebar: true,
    setHideSidebar: () => { },
    authorFirstName: '',
    authorLastName: '',
    socialMediaLinks: {
      github: '',
      instagram: '',
      linkedin: '',
      twitter: '',
      base64Email: ''
    }
  })
