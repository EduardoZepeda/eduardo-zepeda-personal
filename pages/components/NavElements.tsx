import { useContext } from 'react'
import { openSidebarContext } from '../../lib/OpenSidebarContext'

const NavElements = (): JSX.Element => {
  const { setHideSidebar } = useContext(openSidebarContext)

  return (
    <ol>
      <a onClick={() => setHideSidebar(true)} href='#'><ul>Introduction</ul></a>
      <a onClick={() => setHideSidebar(true)} href='#about'><ul>About me</ul></a>
      <a onClick={() => setHideSidebar(true)} href='#portfolio'><ul>Portfolio</ul></a>
      <a onClick={() => setHideSidebar(true)} href='#projects'><ul>OSS</ul></a>
      <a onClick={() => setHideSidebar(true)} href='#contact'><ul>Contact</ul></a>
    </ol>
  )
}

export default NavElements
