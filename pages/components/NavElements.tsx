import { useContext } from 'react'
import { openSidebarContext } from '../../lib/OpenSidebarContext'

const NavElements = (): JSX.Element => {
  const { setHideSidebar } = useContext(openSidebarContext)

  return (
    <ol>
      <ul><a onClick={() => setHideSidebar(true)} href='#'>Introduction</a></ul>
      <ul><a onClick={() => setHideSidebar(true)} href='#about'>About me</a></ul>
      <ul><a onClick={() => setHideSidebar(true)} href='#portfolio'>Portfolio</a></ul>
      <ul><a onClick={() => setHideSidebar(true)} href='#projects'>OSS</a></ul>
      <ul><a onClick={() => setHideSidebar(true)} href='#contact'>Contact</a></ul>
    </ol>
  )
}

export default NavElements
