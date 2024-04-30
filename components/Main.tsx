import AboutMe from './AboutMe'
import Introduction from './Introduction'
import Portfolio from './Portfolio'
import Projects from './Projects'
import Contact from './Contact'
import RevealElement from './Reveal'
import Schema from './Schema'

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
