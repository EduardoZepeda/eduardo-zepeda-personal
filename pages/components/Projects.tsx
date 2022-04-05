import React from 'react'
import styles from '../../styles/Home.module.css'
import ProjectItem from './ProjectItem'

const projectData = [
  {
    title: 'django-payments-mercadopago',
    description: 'Make your payments easier with this mercadopago payment gateway backend for django-payments. Available on PyPI.',
    stack: 'Django',
    link: 'https://github.com/EduardoZepeda/django-payments-mercadopago'
  },
  {
    title: 'django-postalcodes-mexico',
    description: 'A Django Package that handles all the hassle of working with Mexican Postal Service (Correos de Mexico) postal codes. Available on PyPI.',
    stack: 'Django',
    link: 'https://github.com/EduardoZepeda/django-postalcodes-mexico'
  }
]

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
