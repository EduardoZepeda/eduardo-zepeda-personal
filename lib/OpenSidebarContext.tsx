import { createContext, Dispatch, SetStateAction } from 'react'



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
