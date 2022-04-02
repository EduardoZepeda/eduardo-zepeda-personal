import React from 'react'
import styles from '../../styles/Home.module.css'
import ProjectItem from './ProjectItem'

const Projects = (): JSX.Element => {
  return (
    <section className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.projectsContainer}>
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </section>
  )
}

export default Projects
