import styles from '@styles/Home.module.css'
import ProjectItem from './ProjectItem'
import { projectData } from 'siteData'



const Projects = (): JSX.Element => {
  const projectItems = projectData.map(({ title, description, link, stack }) => <ProjectItem key={title} title={title} description={description} link={link} stack={stack} />)
  return (
    <section id='projects' className={styles.projects}>
      <h2>Open source projects</h2>
      <div className={styles.projectsContainer}>
        {projectItems}
      </div>
    </section>
  )
}

export default Projects
