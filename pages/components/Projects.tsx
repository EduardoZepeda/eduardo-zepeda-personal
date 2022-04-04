import React from 'react'
import styles from '../../styles/Home.module.css'
import ProjectItem from './ProjectItem'

const projectData = [
  { title: 'title', description: 'description', stack: 'stack ', link: 'link' },
  { title: 'title', description: 'description', stack: 'stack ', link: 'link' },
  { title: 'title', description: 'description', stack: 'stack ', link: 'link' },
  { title: 'title', description: 'description', stack: 'stack ', link: 'link' }
]

const Projects = (): JSX.Element => {
  const projectItems = projectData.map(({ title, description, link, stack }) => <ProjectItem key={title} title={title} description={description} link={link} stack={stack} />)
  return (
    <section className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.projectsContainer}>
        {projectItems}
      </div>
    </section>
  )
}

export default Projects
