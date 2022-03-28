import { createContext, Dispatch, SetStateAction } from 'react'

interface openSidebarContextProps {
  hideSidebar: boolean
  setHideSidebar: Dispatch<SetStateAction<boolean>>
}

export const openSidebarContext = createContext<openSidebarContextProps>({ hideSidebar: false, setHideSidebar: () => { } })
