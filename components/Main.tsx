import AboutMe from '@components/AboutMe'
import Introduction from '@components/Introduction'
import Portfolio from '@components/Portfolio'
import Projects from '@components/Projects'
import Contact from '@components/Contact'
import RevealElement from '@components/Reveal'
import Schema from '@components/Schema'

const Main = (): JSX.Element => {
  return (
    <>
      <RevealElement><Introduction /></RevealElement>
      <RevealElement><AboutMe /></RevealElement>
      <RevealElement><Portfolio /></RevealElement>
      <RevealElement><Projects /></RevealElement>
      <RevealElement><Contact /></RevealElement>
      <Schema />
    </>
  )
}

export default Main
