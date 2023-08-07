import styles from '@styles/Home.module.css'
import Icons from './Icons'

const SocialMedia = (): JSX.Element => {
  return (
    <aside id='socialMediaLinks'>
      <div className={`${styles.socialMedia} ${styles.side}`}>
        <Icons />
      </div>
    </aside>
  )
}

export default SocialMedia
