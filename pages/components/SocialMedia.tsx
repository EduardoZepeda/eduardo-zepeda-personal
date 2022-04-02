import { useContext } from 'react'
import styles from '../../styles/Home.module.css'
import { openSidebarContext } from '../../lib/OpenSidebarContext'
import Icons from './Icons'

const SocialMedia = (): JSX.Element => {
  const { hideSidebar } = useContext(openSidebarContext)

  return (
    <aside id='socialMediaLinks'>
      <div className={hideSidebar ? `${styles.socialMedia} ${styles.side}` : `${styles.socialMedia} ${styles.hidden}`}>
        <Icons />
      </div>
    </aside>
  )
}

export default SocialMedia
