import React from 'react'
import styles from '../../styles/Home.module.css'
import ProjectItem from './ProjectItem'

const projectData = [
  {
    title: 'django-payments-mercadopago',
    description: 'A totally functional mercadopago payment gateway backend for django-payments.',
    stack: 'Django',
    link: 'https://github.com/EduardoZepeda/django-payments-mercadopago'
  },
  {
    title: 'django-postalcodes-mexico',
    description: 'A Django Package for getting and handling the Mexican Postal Service (Correos de Mexico) postal codes information.',
    stack: 'Django',
    link: 'https://github.com/EduardoZepeda/django-postalcodes-mexico'
  }
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
